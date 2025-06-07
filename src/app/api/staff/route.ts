import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all staff members
export async function GET() {
    const staff = await prisma.staff.findMany();
    return NextResponse.json(staff);
}

// POST create a new staff member
export async function POST(request: Request) {
    const data = await request.json();
    try {
        const newStaff = await prisma.staff.create({ data });
        return NextResponse.json(newStaff, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Staff creation failed' }, { status: 500 });
    }
}
