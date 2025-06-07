// app/api/kitchen/[id]/route.ts
import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function GET(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = context.params;

    const display = await prisma.kitchenDisplay.findUnique({
        where: { id: parseInt(id) },
        include: { order: true },
    });

    if (!display) {
        return NextResponse.json({ error: 'Kitchen display not found' }, { status: 404 });
    }

    return NextResponse.json(display);
}

export async function PUT(
    req: NextRequest,
    context: { params: { id: string } }
) {
    const { id } = context.params;
    const data = await req.json();

    try {
        const updated = await prisma.kitchenDisplay.update({
            where: { id: parseInt(id) },
            data: {
                status: data.status,
                priority: data.priority,
                notes: data.notes,
            },
        });

        return NextResponse.json(updated);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update kitchen display', detail: error.message },
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
        await prisma.kitchenDisplay.delete({ where: { id: parseInt(id) } });
        return NextResponse.json({ message: 'Kitchen display deleted' });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to delete kitchen display', detail: error.message },
            { status: 500 }
        );
    }
}
