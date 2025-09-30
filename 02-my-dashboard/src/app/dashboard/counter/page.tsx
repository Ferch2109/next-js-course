import { CardCounter } from "@/app/shopping-cart";

export const metadata = {
 title: 'Shopping Cart',
 description: 'Un simple contador',
};

export default function NamePage() {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<span>Productos en el carrito de compras</span>
			<CardCounter/>
		</div>
	);
}
