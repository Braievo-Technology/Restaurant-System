// app/api/order/[id]/route.ts
import { PrismaClient,  } from '@prisma/client';
import { NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const orders = await prisma.order.findMany({
            include: {
                items: true,
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

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            date,
            totalAmount,
            status,
            customerId,
            items,
            giftCardId,
            giftCardAmount,
            kitchenDisplay,
        } = body;

        const order = await prisma.order.create({
            data: {
                date: date ? new Date(date) : undefined,
                totalAmount,
                status,
                customer: { connect: { id: customerId } },
                items: {
                    create: items.map((item: any) => ({
                        foodName: item.foodName,
                        quantity: item.quantity,
                        unitPrice: item.unitPrice,
                    })),
                },
                giftCardUsage: giftCardId
                    ? {
                        create: {
                            giftCard: { connect: { id: giftCardId } },
                            usedAmount: giftCardAmount,
                        },
                    }
                    : undefined,
                kitchenDisplay: kitchenDisplay
                    ? {
                        create: {
                            status: kitchenDisplay.status,
                            priority: kitchenDisplay.priority,
                            notes: kitchenDisplay.notes,
                        },
                    }
                    : undefined,
            },
            include: {
                items: true,
                giftCardUsage: true,
                kitchenDisplay: true,
            },
        });

        return NextResponse.json(order);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
