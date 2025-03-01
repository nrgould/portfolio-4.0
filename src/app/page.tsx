import Image from 'next/image';
import Link from 'next/link';
import { Shell } from '@/components/layout/shell';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion';

export default function Home() {
	return (
		<Shell>
			{/* Hero Section */}
			<section className='relative w-full'>
				<div className='relative h-[90vh] w-full'>
					<Image
						src='/images/optimized_images/lifestyle_product_majiang_furniture_set.jpg'
						alt='Hero image showcasing lifestyle photography'
						fill
						priority
						className='object-cover'
					/>
					<div className='absolute inset-0 bg-background/60 backdrop-blur-[2px]' />
					<div className='container absolute inset-0 flex flex-col items-center justify-center text-center md:items-start md:text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<h1 className='text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl'>
							Capturing Life's
							<br />
							<span className='text-primary'>
								Beautiful Moments
							</span>
						</h1>
						<p className='mt-6 max-w-[600px] text-lg text-muted-foreground'>
							Professional product and lifestyle photography that
							tells your brand's story with clarity and emotion.
						</p>
						<div className='mt-8 flex gap-4'>
							<Button asChild size='lg'>
								<Link href='/portfolio'>View Portfolio</Link>
							</Button>
							<Button variant='outline' asChild size='lg'>
								<Link href='/contact'>Get in Touch</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Work */}
			<section className='w-full py-16 md:py-24'>
				<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='mb-12 text-center'>
						<h2 className='mb-3 text-3xl font-bold md:text-4xl'>
							Featured Work
						</h2>
						<p className='mx-auto max-w-[700px] text-muted-foreground'>
							Showcasing a blend of product and lifestyle
							photography that demonstrates quality, attention to
							detail, and storytelling.
						</p>
					</div>

					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{featuredProjects.map((project, index) => (
							<Link
								key={index}
								href={`/portfolio#${project.id}`}
								className='group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md'
							>
								<div className='overflow-hidden'>
									<AspectRatio ratio={4 / 5}>
										<Image
											src={project.image}
											alt={project.title}
											fill
											className='object-cover transition-transform duration-500 group-hover:scale-105'
										/>
									</AspectRatio>
								</div>
								<div className='p-4'>
									<h3 className='text-xl font-medium'>
										{project.title}
									</h3>
									<p className='mt-2 text-sm text-muted-foreground'>
										{project.description}
									</p>
								</div>
							</Link>
						))}
					</div>

					<div className='mt-12 text-center'>
						<Button asChild variant='outline' size='lg'>
							<Link href='/portfolio'>See More Work</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* About Preview */}
			<section className='w-full bg-muted py-16 md:py-24'>
				<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
						<div>
							<div className='rounded-lg overflow-hidden'>
								<Image
									src='/images/optimized_images/portrait_thomas_stockholm_street_sunset.jpg'
									alt='Photographer portrait'
									width={600}
									height={800}
									className='object-cover object-center'
								/>
							</div>
						</div>
						<div>
							<h2 className='mb-3 text-3xl font-bold md:text-4xl'>
								About Nicholas
							</h2>
							<p className='mt-4 text-muted-foreground'>
								I'm a professional photographer specializing in
								product and lifestyle photography. With over 10
								years of experience, I've worked with brands to
								create imagery that connects with their audience
								and tells their unique story.
							</p>
							<p className='mt-4 text-muted-foreground'>
								My approach combines technical precision with an
								artistic eye to capture the essence of your
								products and the lifestyle they represent.
							</p>
							<div className='mt-8'>
								<Button asChild variant='outline'>
									<Link href='/about'>
										Learn More About Me
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className='w-full py-16 md:py-24'>
				<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='mb-12 text-center'>
						<h2 className='mb-3 text-3xl font-bold md:text-4xl'>
							Services
						</h2>
						<p className='mx-auto max-w-[700px] text-muted-foreground'>
							Professional photography services tailored to your
							brand's unique needs.
						</p>
					</div>

					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{services.map((service, index) => (
							<div
								key={index}
								className='rounded-lg border bg-card p-6'
							>
								<div className='mb-4 text-primary'>
									{service.icon}
								</div>
								<h3 className='text-xl font-medium'>
									{service.title}
								</h3>
								<p className='mt-2 text-muted-foreground'>
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className='w-full bg-muted py-16 md:py-24'>
				<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='mb-3 text-3xl font-bold md:text-4xl'>
						Let's Work Together
					</h2>
					<p className='mx-auto mt-4 max-w-[600px] text-muted-foreground'>
						Ready to elevate your brand with stunning visuals? Get
						in touch to discuss your project and how we can bring
						your vision to life.
					</p>
					<div className='mt-8'>
						<Button asChild size='lg'>
							<Link href='/contact'>Get in Touch</Link>
						</Button>
					</div>
				</div>
			</section>
		</Shell>
	);
}

// Sample featured projects
const featuredProjects = [
	{
		id: 'product-lifestyle-ravens',
		title: 'Ravens Brew Coffee',
		description: 'Product and lifestyle photography for coffee brand.',
		image: '/images/optimized_images/product_lifestyle_ravens_brew_hero.jpg',
	},
	{
		id: 'lifestyle-furniture',
		title: 'Majiang Furniture Collection',
		description: 'Minimalist furniture in natural settings.',
		image: '/images/optimized_images/product_majiang_furniture_set_above.jpg',
	},
	{
		id: 'lifestyle-product-outdoors',
		title: 'Outdoor Apparel',
		description: 'Lifestyle photography for outdoor brand.',
		image: '/images/optimized_images/4_lifestyle_product_aileen_wearing_helly_hansen_jacket_lofoten_islands_norway.jpg',
	},
];

// Services
const services = [
	{
		title: 'Product Photography',
		description:
			'Studio and contextual photography that showcases your products in their best light.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-8 w-8'
			>
				<path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
			</svg>
		),
	},
	{
		title: 'Lifestyle Photography',
		description:
			'Authentic scenarios that show your products in their natural environment and in use.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-8 w-8'
			>
				<rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
				<circle cx='9' cy='9' r='2' />
				<path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
			</svg>
		),
	},
	{
		title: 'Brand Campaigns',
		description:
			'Cohesive visual storytelling that aligns with your brand identity and marketing goals.',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-8 w-8'
			>
				<rect width='18' height='18' x='3' y='3' rx='2' />
				<path d='M3 9h18' />
				<path d='M9 21V9' />
			</svg>
		),
	},
];
