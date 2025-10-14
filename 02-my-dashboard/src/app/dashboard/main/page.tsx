import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';

export const metadata = {
	title: 'Admin Dashboard',
	description: 'SEO Title',
};

const MainPage = () => {
	return (
		<div className='text-black'>
			<h1 className='mt-2 text-3xl p-2'>Dashboard</h1>
			<span className='text-xl'>Informacion General</span>

			<WidgetsGrid/>
		</div>
	);
};

export default MainPage;
