import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { email as recipientEmail } from '@/lib/constants';

// Configure email transporter
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		// These should be environment variables in production
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function POST(request: Request) {
	try {
		// Parse the request body
		const body = await request.json();
		const { name, email, subject, message } = body;

		// Validate the input
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		// Email content
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: recipientEmail,
			subject: `Contact Form: ${subject}`,
			text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
			html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
		};

		// Send the email
		await transporter.sendMail(mailOptions);

		// Return success response
		return NextResponse.json(
			{ message: 'Email sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'Failed to send email' },
			{ status: 500 }
		);
	}
}
