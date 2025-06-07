import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all tables
export async function GET() {
    try {
        const tables = await prisma.table.findMany();
        return NextResponse.json(tables);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch tables' }, { status: 500 });
    }
}

// POST create a new table
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newTable = await prisma.table.create({ data });
        return NextResponse.json(newTable, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Table creation failed' }, { status: 500 });
    }
}
