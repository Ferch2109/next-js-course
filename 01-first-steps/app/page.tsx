import Link from "next/link";

export default function Home() {
	return (
		<main className='flex flex-col items-center p-24'>
			<span className='text-5xl'> Hola Mundo </span>

      <Link href='/about' className="text-3xl"> About </Link>
		</main>
	);
}
