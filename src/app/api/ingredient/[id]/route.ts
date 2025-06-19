// /app/api/ingredient/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
    try {
        const ingredient = await prisma.ingredient.findUnique({
            where: { id: parseInt(params.id) },
            include: { foods: true },
        });

        if (!ingredient) {
            return NextResponse.json({ error: 'Ingredient not found' }, { status: 404 });
        }

        return NextResponse.json(ingredient);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch ingredient' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const data = await req.json();

        const updatedIngredient = await prisma.ingredient.update({
            where: { id: parseInt(params.id) },
            data: {
                name: data.name,
            },
        });

        return NextResponse.json(updatedIngredient);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update ingredient' }, { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.ingredient.delete({
            where: { id: parseInt(params.id) },
        });

        return NextResponse.json({ message: 'Ingredient deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete ingredient' }, { status: 500 });
    }
}
