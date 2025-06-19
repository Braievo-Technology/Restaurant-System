// /app/api/food/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
    try {
        const food = await prisma.food.findUnique({
            where: { id: parseInt(params.id) },
            include: {
                category: true,
                ingredients: true
            },
        });

        if (!food) {
            return NextResponse.json({ error: 'Food not found' }, { status: 404 });
        }

        return NextResponse.json(food);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch food item' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const data = await req.json();

        const updatedFood = await prisma.food.update({
            where: { id: parseInt(params.id) },
            data: {
                name: data.name,
                description: data.description,
                portion: data.portion,
                priceSmall: data.priceSmall,
                priceMedium: data.priceMedium,
                priceLarge: data.priceLarge,
                available: data.available,
                category: {
                    connect: { id: data.categoryId }
                },
                ingredients: {
                    set: data.ingredientIds?.map((id: number) => ({ id })) || []
                }
            }
        });

        return NextResponse.json(updatedFood);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update food item' }, { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.food.delete({
            where: { id: parseInt(params.id) },
        });
        return NextResponse.json({ message: 'Food item deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete food item' }, { status: 500 });
    }
}
