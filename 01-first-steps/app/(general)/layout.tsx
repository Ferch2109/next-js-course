import Navbar from '@/components/navbar/Navbar';

export default function GeneralLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Navbar />
			<h1>Hello Root Layout General</h1>
			{children}
		</div>
	);
}
