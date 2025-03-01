import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function About() {
	return (
		<div className='flex flex-col md:flex-row min-h-screen'>
			{/* Main Content */}
			<div className='flex-1 md:ml-64 lg:ml-72 p-4 md:p-8'>
				<div className='max-w-[75%] mx-auto'>
					<motion.h1
						className='text-2xl mb-8'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						About Me
					</motion.h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<motion.div
								className='aspect-[4/5] relative overflow-hidden mb-6'
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								viewport={{ once: true }}
							>
								<Image
									src='/images/profile.jpg'
									alt='Nicholas Gould'
									fill
									sizes='(max-width: 768px) 100vw, 50vw'
									className='object-cover'
									priority
								/>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							viewport={{ once: true }}
							className='space-y-4'
						>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
							>
								I&apos;m Nicholas Gould, a commercial
								photographer specializing in product and
								lifestyle photography. With over 8 years of
								experience, I&apos;ve developed a distinctive
								style that combines clean, minimalist aesthetics
								with authentic storytelling.
							</motion.p>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
							>
								My journey in photography began with a passion
								for capturing the essence of products and the
								stories they tell. Today, I work with brands
								across various industries to create compelling
								visual narratives that resonate with their
								target audiences.
							</motion.p>
							<motion.p
								className='text-muted-foreground'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								viewport={{ once: true }}
							>
								Based in Seattle, I bring a Pacific Northwest
								sensibility to my work—embracing natural light,
								organic textures, and environmental
								consciousness. My approach is collaborative and
								detail-oriented, ensuring that each project not
								only meets but exceeds client expectations.
							</motion.p>
						</motion.div>
					</div>

					<motion.div
						className='mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<h2 className='text-xl mb-4'>My Approach</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
							>
								<h3 className='text-lg mb-2'>Authenticity</h3>
								<p className='text-muted-foreground'>
									I believe in creating authentic images that
									tell a genuine story. Whether it&apos;s a
									product shot or a lifestyle scene, my goal
									is to capture the true essence and emotion
									of the subject.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								viewport={{ once: true }}
							>
								<h3 className='text-lg mb-2'>
									Attention to Detail
								</h3>
								<p className='text-muted-foreground'>
									The difference between a good image and a
									great one often lies in the details. I
									meticulously plan and execute each shot,
									ensuring that every element contributes to
									the overall narrative.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								viewport={{ once: true }}
							>
								<h3 className='text-lg mb-2'>Collaboration</h3>
								<p className='text-muted-foreground'>
									I view each project as a partnership. By
									understanding your brand&apos;s vision and
									goals, I can create images that not only
									look beautiful but also effectively
									communicate your message.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.9 }}
								viewport={{ once: true }}
							>
								<h3 className='text-lg mb-2'>Innovation</h3>
								<p className='text-muted-foreground'>
									While respecting traditional photography
									principles, I continuously explore new
									techniques and perspectives to keep my work
									fresh and engaging.
								</p>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className='text-xl mb-4'>
							Let&apos;s Work Together
						</h2>
						<p className='text-muted-foreground mb-4'>
							I&apos;m always excited to collaborate on new
							projects and bring creative visions to life. Whether
							you&apos;re a brand looking for product photography,
							an agency needing lifestyle content, or an
							individual with a unique project, I&apos;d love to
							hear from you.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							viewport={{ once: true }}
						>
							<a
								href='/contact'
								className='inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'
							>
								Get in Touch
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
