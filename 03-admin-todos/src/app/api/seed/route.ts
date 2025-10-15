import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(_: NextRequest) {
	// NOTE: Purga la base de datos.
	await prisma.todo.deleteMany();

	// NOTE: Inserta la data.
	const todo = await prisma.todo.createMany({
		data: [
			{ description: 'Sleepy Bear', complete: true },
			{ description: 'Mad Fox' },
			{ description: 'Silly Goat' },
			{ description: 'Dummy Bunny' },
		],
	});

	return NextResponse.json({
		message: `Seed executed: ${todo.count} documents created.`,
	});
}
