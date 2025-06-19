// /app/api/staff/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const staff = await prisma.staff.findMany({
            include: { assignedTables: { include: { table: true } } }
        });
        return NextResponse.json(staff);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch staff' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const staff = await prisma.staff.create({
            data: body,
        });
        return NextResponse.json(staff, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create staff' }, { status: 500 });
    }
}
