import { Todo } from '@/generated/prisma';
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { boolean, object, string } from 'yup';

interface Args {
	params: Promise<{
		id: string;
	}>;
}

const getTodo = async (id: string): Promise<Todo | undefined> => {
	const todo = await prisma.todo.findFirstOrThrow({
		where: { id },
	});

	return todo;
};

export async function GET(request: NextRequest, args: Args) {
	try {
		const { id } = await args.params;
		const todo = await getTodo(id);

		return NextResponse.json({ data: todo });
	} catch (error) {
		return NextResponse.json(error, { status: 404 });
	}
}

const putSchema = object({
	description: string().optional(),
	complete: boolean().optional(),
});

export async function PUT(request: NextRequest, args: Args) {
	try {
		const { id } = await args.params;

		const { complete, description } = await putSchema.validate(
			await request.json()
		);

		const updatedTodo = await prisma.todo.update({
			where: { id },
			data: { complete, description },
		});

		return NextResponse.json({ status: 'success', data: updatedTodo });
	} catch (error) {
		return NextResponse.json(error, { status: 404 });
	}
}
