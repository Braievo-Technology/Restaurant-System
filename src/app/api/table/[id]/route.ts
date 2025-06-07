import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET table by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    try {
        const table = await prisma.table.findUnique({ where: { id } });
        if (!table) {
            return NextResponse.json({ error: 'Table not found' }, { status: 404 });
        }
        return NextResponse.json(table);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch table' }, { status: 500 });
    }
}

// PUT update table by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    try {
        const data = await request.json();
        const updatedTable = await prisma.table.update({
            where: { id },
            data,
        });
        return NextResponse.json(updatedTable);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update table' }, { status: 500 });
    }
}

// DELETE table by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    try {
        await prisma.table.delete({ where: { id } });
        return NextResponse.json({ message: 'Table deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete table' }, { status: 500 });
    }
}
