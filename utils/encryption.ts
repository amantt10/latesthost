/**
 * @file encryption.ts
 * @description
 * Utility functions for encrypting and decrypting data using AES-256-CBC.
 * The encryption key must be securely provided via environment variables.
 * 
 * @remarks
 * - Do NOT hardcode the encryption key in the source code.
 * - The IV (Initialization Vector) is randomly generated for each encryption and prepended to the encrypted output.
 * - Both encryption and decryption functions handle null or undefined inputs gracefully.
 * - Errors during decryption are logged and result in a null return value.
 */
import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const encryptionKey = process.env.ENCRYPTION_KEY as string; // Type assertion as it comes from env
const ivLength = 16; // For AES, this is typically 16 bytes

export const encryptData = (text: string | null | undefined): string | null => {
  if (!encryptionKey) {
    console.error('Encryption key is not set!');
    return null;
  }
  if (text === null || text === undefined) {
    return null;
  }
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey, 'hex'), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted; // Store IV with the encrypted text
};

export const decryptData = (encryptedText: string | null | undefined): string | null => {
  if (!encryptionKey) {
    console.error('Encryption key is not set!');
    return null;
  }
  if (!encryptedText) {
    return null;
  }
  try {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift()!, 'hex'); // Non-null assertion as split will have at least one element
    const encryptedData = textParts.join(':');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(encryptionKey, 'hex'), iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    console.error('Error decrypting data:', error);
    return null;
  }
};