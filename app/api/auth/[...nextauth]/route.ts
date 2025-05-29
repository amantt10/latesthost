import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import type { JWT } from 'next-auth/jwt';
import type { Session, SessionStrategy } from 'next-auth';
 
export const authOptions = {
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;
 
        const user = await prisma.users.findUnique({ where: { email } });
        if (!user) return null;
 
        const isPasswordValid = await bcrypt.compare(password, user.password || '');
        if (!isPasswordValid) return null;
 
        const { password: hashedPassword, ...userWithoutPassword } = user;
        return { ...userWithoutPassword, id: String(user.id) };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.role = user.role;
        token.name = user.first_name + ' ' + user.last_name;
        token.id = user.id; // id is a string
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        (session.user as any).role = token.role as string | undefined;
        (session.user as any).name = token.name as string | undefined;
        (session.user as any).email = session.user.email as string | undefined;
        (session.user as any).id = token.id as string | undefined;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
 
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };