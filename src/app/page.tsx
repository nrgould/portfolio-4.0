import * as motion from 'motion/react-client';
import { MosaicGallery } from '@/components/mosaic-gallery';
import { Sidebar } from '@/components/layout/sidebar';

// Server Component for SEO benefits
export default function Home() {
	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Sidebar Navigation */}
			<Sidebar currentPath='/' />

			{/* Main Content */}
			<motion.div
				className='flex-1 md:ml-64 lg:ml-72'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<MosaicGallery />
			</motion.div>
		</div>
	);
}
