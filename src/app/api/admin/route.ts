import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all admins
export async function GET() {
    const admins = await prisma.admin.findMany();
    return NextResponse.json(admins);
}

// POST create a new admin
export async function POST(request: Request) {
    const data = await request.json();
    try {
        const newAdmin = await prisma.admin.create({ data });
        return NextResponse.json(newAdmin, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Admin creation failed' }, { status: 500 });
    }
}
