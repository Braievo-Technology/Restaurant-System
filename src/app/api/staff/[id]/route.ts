import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET staff member by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const staff = await prisma.staff.findUnique({ where: { id } });

    if (!staff) {
        return NextResponse.json({ error: 'Staff not found' }, { status: 404 });
    }

    return NextResponse.json(staff);
}

// PUT update staff member by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const data = await req.json();

    try {
        const updatedStaff = await prisma.staff.update({
            where: { id },
            data,
        });
        return NextResponse.json(updatedStaff);
    } catch (error) {
        return NextResponse.json({ error: 'Staff update failed' }, { status: 500 });
    }
}

// DELETE staff member by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    try {
        await prisma.staff.delete({ where: { id } });
        return NextResponse.json({ message: 'Staff deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Staff deletion failed' }, { status: 500 });
    }
}
