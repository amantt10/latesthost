// prisma.ts

// -----------------------------
// Import PrismaClient from the generated client output directory
// -----------------------------
import { PrismaClient } from './generated/prisma';  // Import from custom output path

// -----------------------------
// Extend the NodeJS global type to include our Prisma client
// This avoids TypeScript errors when attaching prisma to the global object
// -----------------------------
declare global {
  var prisma: PrismaClient | undefined;
}

// -----------------------------
// Create a singleton instance of PrismaClient
// This ensures only one instance is used across the app (important for hot-reloading in development)
// -----------------------------
const prisma = globalThis.prisma || new PrismaClient();

// -----------------------------
// In development, cache the Prisma client on the global object
// Prevents creating multiple instances during hot-reloads
// -----------------------------
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// -----------------------------
// Export the singleton PrismaClient instance for use throughout the app
// -----------------------------
export default prisma;