import Image from 'next/image';
import { Shell } from '@/components/layout/shell';
import { Separator } from '@/components/ui/separator';

export default function About() {
	return (
		<Shell>
			<div className='container py-16 md:py-24'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className='mb-3 text-4xl font-bold md:text-5xl'>
						About Me
					</h1>
					<p className='text-muted-foreground'>
						Product & Lifestyle Photographer
					</p>
				</div>

				<div className='mt-16 grid grid-cols-1 gap-12 md:grid-cols-2'>
					<div className='order-2 md:order-1'>
						<h2 className='text-2xl font-bold'>Nicholas Gordon</h2>
						<p className='mt-4 text-muted-foreground'>
							I&apos;m a professional photographer with over 10 years
							of experience specializing in product and lifestyle
							photography. Based between Stockholm and Copenhagen,
							I work with brands around the world to create
							compelling visual stories.
						</p>
						<p className='mt-4 text-muted-foreground'>
							My photography journey began in landscape
							photography, capturing the stunning environments of
							Scandinavia and the Alps. This background in natural
							settings translates into my commercial work, where I
							focus on authentic storytelling and highlighting the
							relationship between products and the environments
							they&apos;re used in.
						</p>
						<p className='mt-4 text-muted-foreground'>
							I believe that great product photography goes beyond
							simply documenting an item - it should convey
							emotion, tell a story, and create connection with
							the viewer. Whether it&apos;s studio product
							photography with meticulous lighting or lifestyle shots
							in natural settings, my goal is to create images that
							resonate with your audience and elevate your brand.
						</p>

						<Separator className='my-8' />

						<h3 className='text-xl font-bold'>My Approach</h3>
						<p className='mt-4 text-muted-foreground'>
							I approach each project with a blend of technical
							precision and creative vision. My process involves
							understanding your brand thoroughly, planning shoots
							that align with your marketing goals, and delivering
							images that exceed expectations.
						</p>
						<p className='mt-4 text-muted-foreground'>
							When we work together, you&apos;ll get more than just a
							photographer - you&apos;ll get a creative partner
							committed to bringing your vision to life.
						</p>
					</div>
					<div className='order-1 md:order-2 md:pl-8'>
						<div className='sticky top-24 space-y-8'>
							<div className='overflow-hidden rounded-lg'>
								<Image
									src='/images/optimized_images/portrait_thomas_stockholm_street_sunset.jpg'
									alt='Nicholas Gordon'
									width={600}
									height={800}
									className='object-cover object-center'
								/>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<div className='overflow-hidden rounded-lg'>
									<Image
										src='/images/optimized_images/landscape_dolomites_sunset.jpg'
										alt='Nicholas photographing in the Dolomites'
										width={600}
										height={600}
										className='h-full object-cover object-center'
									/>
								</div>
								<div className='overflow-hidden rounded-lg'>
									<Image
										src='/images/optimized_images/lifestyle_portrait_aileen_coffee_shop_stockholm.jpg'
										alt='Portrait photography sample'
										width={600}
										height={600}
										className='h-full object-cover object-center'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-16'>
					<h3 className='mb-6 text-center text-2xl font-bold'>
						My Expertise
					</h3>
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
						{expertise.map((item, index) => (
							<div
								key={index}
								className='rounded-lg border bg-card p-6'
							>
								<div className='mb-4 text-primary'>
									{item.icon}
								</div>
								<h4 className='font-medium'>{item.title}</h4>
								<p className='mt-2 text-sm text-muted-foreground'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</Shell>
	);
}

const expertise = [
	{
		title: 'Product Photography',
		description:
			'Studio and contextual shots that highlight product details and features.',
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
			'Capturing products in their natural environment and in use.',
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
		title: 'Creative Direction',
		description:
			'Guiding the visual storytelling process from concept to completion.',
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
				<circle cx='12' cy='12' r='10' />
				<path d='m14.31 8 5.74 9.94' />
				<path d='M9.69 8h11.48' />
				<path d='m7.38 12 5.74-9.94' />
				<path d='M9.69 16 3.95 6.06' />
				<path d='M14.31 16H2.83' />
				<path d='m16.62 12-5.74 9.94' />
			</svg>
		),
	},
	{
		title: 'Post-Processing',
		description:
			'Expert editing to enhance images while maintaining natural authenticity.',
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
				<path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
				<circle cx='12' cy='12' r='3' />
			</svg>
		),
	},
];
