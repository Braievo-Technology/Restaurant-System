// lib/generateCustomerCode.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function generateCustomerCode(): Promise<string> {
    const count = await prisma.customer.count();
    const nextNumber = count + 1;
    const code = `C${nextNumber.toString().padStart(3, '0')}`;
    return code;
}
