# Google Sheets Contact Form Setup Guide

This guide will help you set up the Google Sheets integration for the contact form on your portfolio website.

## Overview

When someone submits the contact form, their information (name, email, subject, and message) will automatically be saved to a Google Sheet that you own. Each submission includes a timestamp.

## Prerequisites

- A Google account
- Access to Google Cloud Console
- Your portfolio website deployed or running locally

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Portfolio Contact Form Submissions"
4. In the first row, add headers (optional but recommended):
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Subject`
   - Column E: `Message`
5. Note the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
   ```
   Save this ID for later.

## Step 2: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click on the project dropdown and select "New Project"
3. Name your project (e.g., "Portfolio Contact Form")
4. Click "Create"

## Step 3: Enable Google Sheets API

1. In your Google Cloud project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 4: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `portfolio-contact-form`
   - Description: `Service account for contact form submissions`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 5: Create and Download Service Account Key

1. In the "Credentials" page, click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" as the key type
5. Click "Create"
6. A JSON file will be downloaded to your computer - **keep this file secure!**

## Step 6: Share the Google Sheet with the Service Account

1. Open the JSON file you downloaded
2. Find the `client_email` field (it looks like `portfolio-contact-form@your-project.iam.gserviceaccount.com`)
3. Copy this email address
4. Open your Google Sheet
5. Click the "Share" button
6. Paste the service account email
7. Give it "Editor" permissions
8. Uncheck "Notify people" (it's a service account, not a person)
9. Click "Share"

## Step 7: Configure Environment Variables

1. In your project root, create a `.env.local` file (or `.env` if deploying)
2. Copy the contents from `.env.example`
3. Fill in the values:

   ```bash
   # Your Spreadsheet ID from Step 1
   GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here

   # The sheet name (default is Sheet1, or use the name of your tab)
   GOOGLE_SHEETS_SHEET_NAME=Sheet1

   # The entire contents of your service account JSON file (as a single line)
   GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"..."}
   ```

   **Important:** For `GOOGLE_SHEETS_CREDENTIALS`, you need to:
   - Open the JSON file you downloaded
   - Copy the entire contents
   - Remove all newlines (make it a single line)
   - Paste it as the value

## Step 8: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page (`/contact`)

3. Fill out and submit the form

4. Check your Google Sheet - you should see a new row with the submission data!

## Deployment

When deploying to a hosting platform (Vercel, Netlify, etc.):

1. Add the environment variables in your platform's settings:
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
   - `GOOGLE_SHEETS_SHEET_NAME`
   - `GOOGLE_SHEETS_CREDENTIALS`

2. Make sure **not** to commit your `.env.local` file to version control (it's already in `.gitignore`)

## Troubleshooting

### "Server configuration error"
- Check that all environment variables are set correctly
- Make sure the `GOOGLE_SHEETS_CREDENTIALS` is valid JSON on a single line

### "Failed to submit contact form"
- Check the browser console and server logs for detailed error messages
- Verify that the service account has "Editor" access to the Google Sheet
- Make sure the Google Sheets API is enabled in your Google Cloud project

### Submissions not appearing in the sheet
- Verify the Spreadsheet ID is correct
- Check that the sheet name matches (case-sensitive)
- Make sure the service account email has been added as an editor to the sheet

## Security Notes

- Never commit your service account credentials to version control
- Keep your `.env.local` file secure and never share it publicly
- The service account only has access to the specific Google Sheets you share with it
- Consider setting up error logging to monitor failed submissions

## Data Format

Each submission creates a new row with the following columns:

1. **Timestamp**: ISO 8601 format (e.g., `2026-01-29T12:34:56.789Z`)
2. **Name**: The sender's name
3. **Email**: The sender's email address
4. **Subject**: The message subject
5. **Message**: The full message content

You can add formulas, filters, or pivot tables to analyze the data as needed!
