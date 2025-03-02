import * as motion from 'motion/react-client';

export default function Contact() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* Main Content */}
			<div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32'>
				<div className='max-w-4xl mx-auto'>
					<motion.h1
						className='text-2xl mb-8'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Contact
					</motion.h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.3 }}
							viewport={{ once: true }}
							className='space-y-6'
						>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
							>
								I&apos;m always interested in new projects and
								collaborations. Whether you&apos;re looking for
								product photography, lifestyle imagery, or a
								comprehensive brand campaign, I&apos;d love to
								hear from you.
							</motion.p>

							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
								className='space-y-2'
							>
								<h2 className='text-lg'>Email</h2>
								<p className='text-muted-foreground'>
									<a
										href='mailto:hello@nicholasgould.com'
										className='hover:text-foreground transition-colors'
									>
										hello@nicholasgouldphoto.com
									</a>
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								viewport={{ once: true }}
								className='space-y-2'
							>
								<h2 className='text-lg'>Location</h2>
								<p className='text-muted-foreground'>
									Raleigh, NC - Available to travel
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								viewport={{ once: true }}
								className='space-y-4 pt-4'
							>
								<h2 className='text-lg'>Follow</h2>
								<div className='flex space-x-4'>
									<a
										href='https://instagram.com'
										target='_blank'
										rel='noopener noreferrer'
										className='text-muted-foreground hover:text-foreground'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<rect
												width='20'
												height='20'
												x='2'
												y='2'
												rx='5'
												ry='5'
											/>
											<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
											<line
												x1='17.5'
												x2='17.51'
												y1='6.5'
												y2='6.5'
											/>
										</svg>
									</a>
									<a
										href='https://linkedin.com'
										target='_blank'
										rel='noopener noreferrer'
										className='text-muted-foreground hover:text-foreground'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
											<rect
												width='4'
												height='12'
												x='2'
												y='9'
											/>
											<circle cx='4' cy='4' r='2' />
										</svg>
									</a>
									<a
										href='https://behance.net'
										target='_blank'
										rel='noopener noreferrer'
										className='text-muted-foreground hover:text-foreground'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M1 12h6v4H1z' />
											<path d='M8 8h6v8H8z' />
											<path d='M15 4h6v12h-6z' />
										</svg>
									</a>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<motion.form
								className='space-y-6'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
							>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium mb-2'
									>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className='w-full p-3 border border-muted-foreground/30 bg-transparent focus:border-foreground focus:outline-none transition-colors'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium mb-2'
									>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full p-3 border border-muted-foreground/30 bg-transparent focus:border-foreground focus:outline-none transition-colors'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-medium mb-2'
									>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										className='w-full p-3 border border-muted-foreground/30 bg-transparent focus:border-foreground focus:outline-none transition-colors'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium mb-2'
									>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={6}
										className='w-full p-3 border border-muted-foreground/30 bg-transparent focus:border-foreground focus:outline-none transition-colors resize-none'
										required
									></textarea>
								</div>
								<div>
									<button
										type='submit'
										className='px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
									>
										Send Message
									</button>
								</div>
							</motion.form>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
