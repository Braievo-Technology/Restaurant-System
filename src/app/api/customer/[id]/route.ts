// api/customer/[id]/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const customer = await prisma.customer.findUnique({
        where: { id: parseInt(params.id) },
        include: {
            user: true,
            reservations: true,
            orders: true,
            giftCards: true,
            loyalty: true,
        },
    });

    if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

    return NextResponse.json(customer);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const data = await req.json();
    const id = parseInt(params.id);

    const customer = await prisma.customer.update({
        where: { id },
        data: {
            user: {
                update: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    address: data.address,
                    idCard: data.idCard,
                    phoneNumber: data.phoneNumber,
                },
            },
        },
        include: { user: true },
    });

    return NextResponse.json(customer);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    // First delete Customer (has FK to User)
    await prisma.customer.delete({
        where: { id },
    });

    return NextResponse.json({ message: 'Customer deleted' });
}
