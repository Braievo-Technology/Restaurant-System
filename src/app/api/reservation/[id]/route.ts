import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET reservation by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const reservation = await prisma.reservation.findUnique({
        where: { id },
        include: {
            customer: true,
            table: true,
        },
    });

    if (!reservation) {
        return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }

    return NextResponse.json(reservation);
}

// PUT update reservation
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const data = await req.json();

    try {
        const updated = await prisma.reservation.update({
            where: { id },
            data: {
                date: new Date(data.date),
                customerId: data.customerId,
                tableId: data.tableId,
                countPeople: data.countPeople,
            },
            include: {
                customer: true,
                table: true,
            },
        });

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}

// DELETE reservation
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    try {
        await prisma.reservation.delete({ where: { id } });
        return NextResponse.json({ message: 'Reservation deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Deletion failed' }, { status: 500 });
    }
}
