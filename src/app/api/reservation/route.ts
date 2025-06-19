import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all reservations
export async function GET() {
    const reservations = await prisma.reservation.findMany({
        include: {
            customer: true,
            table: true,
        },
    });
    return NextResponse.json(reservations);
}

// POST create new reservation
export async function POST(request: Request) {
    const body = await request.json();

    try {
        const newReservation = await prisma.reservation.create({
            data: {
                date: new Date(body.date),
                customerId: body.customerId,
                tableId: body.tableId,
                countPeople: body.countPeople,
            },
            include: {
                customer: true,
                table: true,
            },
        });

        return NextResponse.json(newReservation, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}
