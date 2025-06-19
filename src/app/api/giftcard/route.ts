// app/api/giftcard/route.ts
import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

// GET all gift cards
export async function GET() {
    const giftCards = await prisma.giftCard.findMany({
        include: { usages: true, customer: true },
    });
    return NextResponse.json(giftCards);
}

// CREATE new gift card
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const giftCard = await prisma.giftCard.create({
            data: {
                code: data.code,
                balance: data.balance,
                expiryDate: new Date(data.expiryDate),
                isActive: data.isActive ?? true,
                customer: { connect: { id: data.customerId } },
            },
        });
        return NextResponse.json(giftCard);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to create gift card', detail: error.message },
            { status: 500 }
        );
    }
}
