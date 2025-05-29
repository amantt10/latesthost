import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
 
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
 
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
 
  try {
    const { name, title, organization,role_description, role_capabilities } = await req.json();
    const userId = Number((session.user as any).id);
    const [firstName, ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');
 
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        first_name: firstName,
        last_name: lastName,
        title: title,
        organization: organization,
        role_description: role_description?? null,
        role_capabilities: role_capabilities ??null,
        updated_at: new Date(),
      },
    });
 
    return NextResponse.json({ message: 'Profile updated successfully', user: updatedUser }, { status: 200 });
  } catch (error: any) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ message: 'Failed to update profile', error: error.message }, { status: 500 });
  }
}