import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { boolean, object, string } from 'yup';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	// NOTE: El operador <+> convierte cadenas a números.
	const take = +(searchParams.get('take') ?? '10');
	const skip = +(searchParams.get('skip') ?? '0');

	if (isNaN(take)) {
		return NextResponse.json(
			{
				message: 'Error: [take] tiene que ser un número',
			},
			{ status: 400 }
		);
	}

	if (isNaN(skip)) {
		return NextResponse.json(
			{
				message: 'Error: [skip] tiene que ser un número',
			},
			{ status: 400 }
		);
	}

	const todos = await prisma.todo.findMany({ take, skip });
	return NextResponse.json({ size: todos.length, data: todos });
}

const postSchema = object({
	description: string().required(),
	complete: boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
	try {
		const { complete, description } = await postSchema.validate(
			await request.json()
		);
		const todo = await prisma.todo.create({ data: { complete, description } });

		return NextResponse.json({ status: 'success', data: todo });
	} catch (error) {
		return NextResponse.json(error, { status: 400 });
	}
}
