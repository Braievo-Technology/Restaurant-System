// /app/api/ingredient/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const ingredients = await prisma.ingredient.findMany({
            include: { foods: true },
        });
        return NextResponse.json(ingredients);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch ingredients' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const ingredient = await prisma.ingredient.create({
            data: {
                name: data.name,
            },
        });

        return NextResponse.json(ingredient, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create ingredient' }, { status: 500 });
    }
}
