import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
 
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
 
  // Use type assertion to access custom properties
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
 
  try {
    const { currentPassword, newPassword } = await req.json();
    const userId = Number((session.user as any).id);
 
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });
 
    if (!user || !user.password) {
      return NextResponse.json({ message: 'User not found or password not set' }, { status: 404 });
    }
 
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
 
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Incorrect current password' }, { status: 400 });
    }
 
    const hashedPassword = await bcrypt.hash(newPassword, 10);
 
    await prisma.users.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
 
    return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating password:', error);
    return NextResponse.json({ message: 'Failed to update password', error: error.message }, { status: 500 });
  }
}