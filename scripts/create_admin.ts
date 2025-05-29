import bcrypt from 'bcrypt';
import prisma from '../lib/prisma';
import 'dotenv/config'; // Adjust the path to your Prisma client
 
async function createAdminUser() {
  const adminEmail = 'machphbi@gmail.com'; // Replace with the admin's email
  const adminPassword = '9876aman'; // Replace with a strong password
  const adminRole = 'admin'; // Or your defined admin role
  const adminFirstName = 'Admin'; // Replace with the admin's first name
  const adminLastName = 'User'; // Replace with the admin's last name
 
  try {
    const hashedPassword = await bcrypt.hash(adminPassword, 10); // 10 is the salt rounds
 
    const newUser = await prisma.users.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        role: adminRole,
        first_name: adminFirstName,
        last_name: adminLastName,
        // Add any other necessary fields here
      },
    });
 
    console.log('Admin user created successfully:', newUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}
 
createAdminUser();
 