// app/api/order/[id]/route.ts
import { PrismaClient,  } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        const order = await prisma.order.findUnique({
            where: { id: Number(params.id) },
            include: {
                items: true,
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

export async function PUT(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = context.params; // ✅ Correctly destructure params here
    const data = await req.json();

    const updatedFood = await prisma.food.update({
        where: { id: parseInt(id) },
        data: {
            name: data.name,
            description: data.description,
            portion: data.portion,
            available: data.available,
            priceSmall: data.priceSmall,
            priceMedium: data.priceMedium,
            priceLarge: data.priceLarge,
        },
    });

    return NextResponse.json(updatedFood);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        await prisma.order.delete({
            where: { id: Number(params.id) },
        });

        return NextResponse.json({ message: 'Order deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
    }
}
