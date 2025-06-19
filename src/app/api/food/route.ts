// /app/api/food/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const foods = await prisma.food.findMany({
            include: {
                category: true,
                ingredients: true
            },
        });
        return NextResponse.json(foods);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch food items' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const createdFood = await prisma.food.create({
            data: {
                name: data.name,
                description: data.description,
                portion: data.portion,
                priceSmall: data.priceSmall,
                priceMedium: data.priceMedium,
                priceLarge: data.priceLarge,
                available: data.available ?? true,
                category: {
                    connect: { id: data.categoryId }
                },
                ingredients: {
                    connect: data.ingredientIds?.map((id: number) => ({ id })) || []
                }
            },
        });

        return NextResponse.json(createdFood, { status: 201 });
    } catch (error: any) {
        console.error('POST /api/food error:', error);
        return NextResponse.json({ error: error.message || 'Failed to create food item' }, { status: 500 });
    }
}
