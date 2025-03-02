# Email Setup for Contact Form

This document explains how to set up the email functionality for the contact form.

## Prerequisites

-   A Gmail account (or another email provider, but the instructions below are for Gmail)
-   Node.js and npm installed

## Setup Steps

1. **Install Dependencies**

    The project uses nodemailer to send emails. The dependencies should already be installed, but if not, run:

    ```bash
    npm install nodemailer
    npm install --save-dev @types/nodemailer
    ```

2. **Create Environment Variables**

    The project uses environment variables to store email credentials. Create or update the `.env.local` file in the root directory with the following:

    ```
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-app-password
    ```

3. **Generate an App Password for Gmail**

    For security reasons, Gmail requires an "App Password" instead of your regular password:

    a. Go to your Google Account settings: https://myaccount.google.com/
    b. Navigate to "Security"
    c. Under "Signing in to Google," select "2-Step Verification" (you must have this enabled)
    d. At the bottom, select "App passwords"
    e. Generate a new app password for "Mail" and "Other (Custom name)" - name it something like "Portfolio Contact Form"
    f. Copy the generated password and use it as the `EMAIL_PASS` in your `.env.local` file

4. **Test the Contact Form**

    After setting up the environment variables, restart your development server and test the contact form:

    ```bash
    npm run dev
    ```

    Fill out the form and submit it. You should receive an email at the address specified in your constants file.

## Troubleshooting

-   **Emails not sending**: Check your console for error messages. Common issues include:

    -   Incorrect email credentials
    -   Gmail security settings blocking the connection
    -   Network issues

-   **"Less secure app" warnings**: Google may block connections from "less secure apps." Using an App Password as described above should resolve this.

## Production Deployment

For production, make sure to:

1. Set the environment variables on your hosting platform
2. Consider using a transactional email service like SendGrid or Mailgun for better deliverability
3. Implement rate limiting to prevent abuse of your contact form
