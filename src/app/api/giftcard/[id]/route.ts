// app/api/giftcard/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function GET(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = context.params;
    const giftCard = await prisma.giftCard.findUnique({
        where: { id: parseInt(id) },
        include: { usages: true, customer: true },
    });

    if (!giftCard) {
        return NextResponse.json({ error: 'Gift card not found' }, { status: 404 });
    }

    return NextResponse.json(giftCard);
}

export async function PUT(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = context.params;
    const data = await req.json();

    try {
        const updated = await prisma.giftCard.update({
            where: { id: parseInt(id) },
            data: {
                code: data.code,
                balance: data.balance,
                expiryDate: new Date(data.expiryDate),
                isActive: data.isActive,
            },
        });
        return NextResponse.json(updated);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update gift card', detail: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = context.params;

    try {
        await prisma.giftCard.delete({ where: { id: parseInt(id) } });
        return NextResponse.json({ message: 'Gift card deleted successfully' });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to delete gift card', detail: error.message },
            { status: 500 }
        );
    }
}
