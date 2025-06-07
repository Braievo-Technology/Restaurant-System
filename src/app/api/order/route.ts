import { PrismaClient, OrderStatus } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all orders
export async function GET() {
    try {
        const orders = await prisma.order.findMany({
            include: {
                customer: true,
                giftCardUsage: true,
                kitchenDisplay: true,
            },
        });
        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}

// POST create new order
export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Example expected data:
        // {
        //   date?: string,
        //   totalAmount: number,
        //   status?: "PENDING" | "PREPARING" | "READY" | "COMPLETED" | "CANCELLED",
        //   customerId: number
        // }

        const newOrder = await prisma.order.create({
            data: {
                date: data.date ? new Date(data.date) : undefined,
                totalAmount: data.totalAmount,
                status: data.status ?? OrderStatus.PENDING,
                customerId: data.customerId,
            },
        });

        return NextResponse.json(newOrder, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
