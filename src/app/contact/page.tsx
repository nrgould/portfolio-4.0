'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shell } from '@/components/layout/shell';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Contact() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
		submitted: false,
		error: false,
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// This would normally send the form data to a server
		// For now, we'll just simulate a successful submission
		setFormState({
			...formState,
			submitted: true,
		});
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Shell>
			<div className='container py-16 md:py-24'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className='mb-3 text-4xl font-bold md:text-5xl'>
						Get in Touch
					</h1>
					<p className='text-muted-foreground'>
						Have a project in mind? Let&apos;s discuss how I can help
						bring your vision to life.
					</p>
				</div>

				<div className='mt-16 grid grid-cols-1 gap-12 md:grid-cols-2'>
					<div>
						<div className='overflow-hidden rounded-lg'>
							<Image
								src='/images/optimized_images/landscape_tromso_harbor.jpg'
								alt='Contact'
								width={600}
								height={800}
								className='h-full object-cover'
							/>
						</div>
						<div className='mt-8'>
							<h3 className='mb-4 text-xl font-bold'>
								Contact Information
							</h3>
							<div className='space-y-4'>
								<div className='flex items-center'>
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
										className='mr-2 h-5 w-5 text-primary'
									>
										<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
									</svg>
									<span>+46 70 123 4567</span>
								</div>
								<div className='flex items-center'>
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
										className='mr-2 h-5 w-5 text-primary'
									>
										<rect
											width='20'
											height='16'
											x='2'
											y='4'
											rx='2'
										/>
										<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
									</svg>
									<span>contact@nicholasgordon.com</span>
								</div>
								<div className='flex items-center'>
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
										className='mr-2 h-5 w-5 text-primary'
									>
										<path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
										<circle cx='12' cy='10' r='3' />
									</svg>
									<span>
										Stockholm, Sweden & Copenhagen, Denmark
									</span>
								</div>
							</div>

							<h3 className='mb-4 mt-8 text-xl font-bold'>
								Working Hours
							</h3>
							<p className='text-muted-foreground'>
								Monday to Friday: 9am - 5pm CET
							</p>
							<p className='text-muted-foreground'>
								Weekend shoots available upon request
							</p>
						</div>
					</div>

					<Card>
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
							<CardDescription>
								Fill out the form below and I&apos;ll get back to
								you as soon as possible.
							</CardDescription>
						</CardHeader>
						<CardContent>
							{formState.submitted ? (
								<div className='text-center'>
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
										className='mx-auto mb-4 h-12 w-12 text-primary'
									>
										<path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
										<polyline points='22 4 12 14.01 9 11.01' />
									</svg>
									<h3 className='mb-2 text-xl font-bold'>
										Thank You!
									</h3>
									<p>
										Your message has been sent successfully.
									</p>
									<p className='mt-2 text-sm text-muted-foreground'>
										I&apos;ll get back to you as soon as
										possible.
									</p>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className='space-y-4'
								>
									<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
										<div className='space-y-2'>
											<label
												htmlFor='name'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
											>
												Name
											</label>
											<input
												id='name'
												name='name'
												type='text'
												required
												value={formState.name}
												onChange={handleChange}
												className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
											/>
										</div>
										<div className='space-y-2'>
											<label
												htmlFor='email'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
											>
												Email
											</label>
											<input
												id='email'
												name='email'
												type='email'
												required
												value={formState.email}
												onChange={handleChange}
												className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
											/>
										</div>
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='subject'
											className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
										>
											Subject
										</label>
										<select
											id='subject'
											name='subject'
											required
											value={formState.subject}
											onChange={handleChange}
											className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
										>
											<option value=''>
												Select a subject
											</option>
											<option value='Product Photography'>
												Product Photography
											</option>
											<option value='Lifestyle Photography'>
												Lifestyle Photography
											</option>
											<option value='Brand Campaign'>
												Brand Campaign
											</option>
											<option value='General Inquiry'>
												General Inquiry
											</option>
										</select>
									</div>
									<div className='space-y-2'>
										<label
											htmlFor='message'
											className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
										>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											required
											value={formState.message}
											onChange={handleChange}
											rows={6}
											className='flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
										/>
									</div>
									<Button type='submit' className='w-full'>
										Send Message
									</Button>
								</form>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</Shell>
	);
}
