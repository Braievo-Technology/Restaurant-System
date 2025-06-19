import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET admin by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const admin = await prisma.admin.findUnique({ where: { id } });

    if (!admin) {
        return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    return NextResponse.json(admin);
}

// PUT update admin by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const data = await req.json();

    try {
        const updatedAdmin = await prisma.admin.update({
            where: { id },
            data,
        });
        return NextResponse.json(updatedAdmin);
    } catch (error) {
        return NextResponse.json({ error: 'Admin update failed' }, { status: 500 });
    }
}

// DELETE admin by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    try {
        await prisma.admin.delete({ where: { id } });
        return NextResponse.json({ message: 'Admin deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Admin deletion failed' }, { status: 500 });
    }
}
