import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all customers
export async function GET() {
    const customers = await prisma.customer.findMany({
        include: { loyalty: true, reservations: true, orders: true },
    });
    return NextResponse.json(customers);
}

// POST create a new customer
export async function POST(request: Request) {
    const data = await request.json();
    try {
        const newCustomer = await prisma.customer.create({ data });
        return NextResponse.json(newCustomer, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Customer creation failed' }, { status: 500 });
    }
}
