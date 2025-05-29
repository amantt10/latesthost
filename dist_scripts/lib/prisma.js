"use strict";
// prisma.ts
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------
// Import PrismaClient from the generated client output directory
// -----------------------------
const prisma_1 = require("./generated/prisma"); // Import from custom output path
// -----------------------------
// Create a singleton instance of PrismaClient
// This ensures only one instance is used across the app (important for hot-reloading in development)
// -----------------------------
const prisma = globalThis.prisma || new prisma_1.PrismaClient();
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
exports.default = prisma;
