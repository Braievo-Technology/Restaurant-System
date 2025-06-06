// api/customer/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const customers = await prisma.customer.findMany({
        include: { user: true, orders: true, reservations: true },
    });
    return NextResponse.json(customers);
}

export async function POST(req: Request) {
    const data = await req.json();

    const user = await prisma.user.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            address: data.address,
            idCard: data.idCard,
            phoneNumber: data.phoneNumber,
            customer: {
                create: {}, // Creates linked Customer row
            },
        },
        include: { customer: true },
    });

    return NextResponse.json(user);
}
