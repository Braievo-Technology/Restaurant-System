import { PrismaClient,  } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET order by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);

    try {
        const order = await prisma.order.findUnique({
            where: { id },
            include: {
                customer: true,
                giftCardUsage: true,
                kitchenDisplay: true,
            },
        });

        if (!order) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        return NextResponse.json(order);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 });
    }
}

// PUT update order by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);
    const data = await request.json();

    try {
        const updatedOrder = await prisma.order.update({
            where: { id },
            data: {
                date: data.date ? new Date(data.date) : undefined,
                totalAmount: data.totalAmount,
                status: data.status,
                customerId: data.customerId,
            },
        });

        return NextResponse.json(updatedOrder);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
    }
}

// DELETE order by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = Number(params.id);

    try {
        await prisma.order.delete({ where: { id } });
        return NextResponse.json({ message: 'Order deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
    }
}
