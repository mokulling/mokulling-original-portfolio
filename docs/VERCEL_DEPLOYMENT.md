# Deploying to Vercel

This guide will help you deploy your portfolio website to Vercel, which fully supports the contact form with Google Sheets integration.

## Why Vercel?

- **Built for Next.js**: Made by the Next.js team, perfect compatibility
- **API Routes Support**: Your contact form will work perfectly
- **Free for Personal Projects**: No cost for hobby/personal sites
- **Easy Environment Variables**: Simple UI to add your Google Sheets credentials
- **Automatic Deployments**: Push to GitHub and it auto-deploys
- **Free SSL**: Automatic HTTPS

## Prerequisites

- Your GitHub repository with the portfolio code
- Google Sheets setup completed (see `GOOGLE_SHEETS_SETUP.md`)
- Your environment variable values ready:
  - `GOOGLE_SHEETS_SPREADSHEET_ID`
  - `GOOGLE_SHEETS_SHEET_NAME`
  - `GOOGLE_SHEETS_CREDENTIALS`

## Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

## Step 2: Import Your Project

1. From your Vercel dashboard, click "Add New..." → "Project"
2. Find your repository: `mokulling-original-portfolio`
3. Click "Import"

## Step 3: Configure Your Project

1. **Framework Preset**: Should auto-detect as "Next.js" ✅
2. **Root Directory**: Leave as `./` (default)
3. **Build Command**: Should be `npm run build` (default)
4. **Output Directory**: Should be `.next` (default)
5. Click "Deploy" (don't worry, it will fail initially - that's expected!)

## Step 4: Add Environment Variables

After the first deployment fails (this is normal - we haven't added the Google Sheets credentials yet):

1. Go to your project settings: Click on "Settings" tab
2. Click "Environment Variables" in the left sidebar
3. Add each variable:

   **Variable 1:**
   - Key: `GOOGLE_SHEETS_SPREADSHEET_ID`
   - Value: Your spreadsheet ID (from the Google Sheets URL)
   - Environment: Production, Preview, Development (check all three)

   **Variable 2:**
   - Key: `GOOGLE_SHEETS_SHEET_NAME`
   - Value: `Sheet1` (or your custom sheet name)
   - Environment: Production, Preview, Development (check all three)

   **Variable 3:**
   - Key: `GOOGLE_SHEETS_CREDENTIALS`
   - Value: Your entire service account JSON (single line, no line breaks)
   - Environment: Production, Preview, Development (check all three)

4. Click "Save" for each variable

## Step 5: Redeploy

1. Go to the "Deployments" tab
2. Click the three dots (...) on the latest deployment
3. Click "Redeploy"
4. Check "Use existing Build Cache"
5. Click "Redeploy"

Your site should now deploy successfully! 🎉

## Step 6: Test Your Contact Form

1. Once deployed, click on the deployment URL (e.g., `your-portfolio.vercel.app`)
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Google Sheet - you should see the new submission!

## Step 7: Connect Your Custom Domain (Optional)

If you have a custom domain:

1. Go to your project settings
2. Click "Domains" in the left sidebar
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Vercel will automatically provision SSL certificates

## Automatic Deployments

Now that everything is set up:

- **Every push to `main`** → Automatically deploys to production
- **Every push to other branches** → Creates a preview deployment
- **Pull requests** → Get their own preview URL

## Disabling GitHub Pages (Optional)

Since you're now using Vercel, you may want to disable GitHub Pages:

1. Go to your GitHub repository
2. Settings → Pages
3. Under "Source", select "None"
4. Save

Or you can keep both and use GitHub Pages for something else!

## Monitoring and Logs

To view logs and monitor your contact form:

1. Go to your Vercel project
2. Click on "Deployments"
3. Click on any deployment
4. Click "Functions" to see API route logs
5. You'll see the console.log output from your contact form submissions

## Troubleshooting

### "Missing Google Sheets configuration" error

- Double-check that all three environment variables are set
- Make sure there are no extra spaces or line breaks
- Try redeploying after adding the variables

### Contact form not submitting

- Check the browser console for errors
- Check Vercel function logs for server-side errors
- Verify the service account has access to the Google Sheet

### Build fails

- Check the build logs in Vercel
- Make sure all dependencies are in `package.json`
- Try running `npm run build` locally to reproduce the issue

## Environment Variables Reference

Here's what your environment variables should look like in Vercel:

```
GOOGLE_SHEETS_SPREADSHEET_ID=1ABC123XYZ456789...
GOOGLE_SHEETS_SHEET_NAME=Sheet1
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...","private_key":"..."}
```

**Important Notes:**
- The `GOOGLE_SHEETS_CREDENTIALS` must be valid JSON on a single line
- Don't include any quotes around the values in Vercel's UI
- All three variables should be available in all environments (Production, Preview, Development)

## Cost

For personal/hobby projects, Vercel is **completely free** and includes:
- Unlimited deployments
- Automatic HTTPS
- 100GB bandwidth per month
- Serverless functions (API routes)
- Custom domains

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

**Next Steps:**
Once deployed, your contact form will be fully functional and submissions will automatically save to your Google Sheet!
