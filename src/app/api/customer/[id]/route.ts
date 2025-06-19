import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET a single customer by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const customer = await prisma.customer.findUnique({
        where: { id },
        include: { loyalty: true, reservations: true, orders: true },
    });

    if (!customer) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }

    return NextResponse.json(customer);
}

// PUT update a customer by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const data = await req.json();

    try {
        const updatedCustomer = await prisma.customer.update({
            where: { id },
            data,
        });
        return NextResponse.json(updatedCustomer);
    } catch (error) {
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}

// DELETE a customer by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    try {
        await prisma.customer.delete({ where: { id } });
        return NextResponse.json({ message: 'Customer deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
    }
}
