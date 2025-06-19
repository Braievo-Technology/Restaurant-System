// app/api/kitchen/route.ts
import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";

const prisma = new PrismaClient();


// GET all kitchen displays
export async function GET() {
    const displays = await prisma.kitchenDisplay.findMany({
        include: { order: true },
        orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(displays);
}

// CREATE new kitchen display
// app/api/kitchen/route.ts
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Check if the order exists
        const existingOrder = await prisma.order.findUnique({
            where: { id: data.orderId },
            include: { kitchenDisplay: true },
        });

        if (!existingOrder) {
            return NextResponse.json(
                { error: 'Order not found' },
                { status: 404 }
            );
        }

        if (existingOrder.kitchenDisplay) {
            return NextResponse.json(
                { error: 'KitchenDisplay already exists for this order' },
                { status: 400 }
            );
        }

        const kitchenDisplay = await prisma.kitchenDisplay.create({
            data: {
                order: { connect: { id: data.orderId } },
                status: data.status ?? 'PENDING',
                priority: data.priority ?? 'NORMAL',
                notes: data.notes ?? null,
            },
        });

        return NextResponse.json(kitchenDisplay);
    } catch (error: any) {
        console.error('POST /api/kitchen error:', error);
        return NextResponse.json(
            { error: 'Failed to create kitchen display', detail: error.message },
            { status: 500 }
        );
    }
}

