# How to Deploy Field. Guild to Vercel

Your project is built with Next.js, which creates a seamless deployment experience with Vercel.

## Prerequisites
1. A [GitHub](https://github.com) account.
2. A [Vercel](https://vercel.com) account.

## Step 1: Push to GitHub
If you haven't already, push your project to a GitHub repository.
1. Create a new repository on GitHub.
2. Run these commands in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 2: Import into Vercel
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** > **"Project"**.
3. Select the `field-guild` repository you just pushed.

## Step 3: Configure Environment Variables (CRITICAL)
For your Google Sheets integration to work, you must add your secrets to Vercel.

In the **"Configure Project"** screen, expand the **"Environment Variables"** section. Add the following three variables. You can copy the values directly from your local `.env.local` file.

| Name | Value |
|------|-------|
| `GOOGLE_SHEET_ID` | Copy from `.env.local` |
| `GOOGLE_CLIENT_EMAIL` | Copy from `.env.local` |
| `GOOGLE_PRIVATE_KEY` | Copy the **entire** key string from `.env.local`. Ensure you include everything from `-----BEGIN` to `-----END`. |

## Step 4: Deploy
Click **"Deploy"**. Vercel will install dependencies, build your site, and assign it a standard domain (like `field-guild.vercel.app`).

## Troubleshooting
- **Application Error on Submit:** If the form fails to submit on the live site, double-check your `GOOGLE_PRIVATE_KEY` in Vercel. Ensure it was copied correctly and includes the full key.
- **Build Fails:** Check the "Build Logs" in Vercel. Common errors are missing dependencies or TypeScript errors (though the current project should be error-free).
