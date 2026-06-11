# Netlify Deployment Guide

This guide provides step-by-step instructions for deploying Hari Automobiles to Netlify.

## Prerequisites

- GitHub account with repository access
- Netlify account (free tier available at https://netlify.com)
- Node.js 22.13.0 or higher (for local testing)

## Deployment Methods

### Method 1: Automatic Deployment via GitHub (Recommended)

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 22.13.0 (auto-detected from `.nvmrc`)

4. **Deploy**
   - Netlify will automatically build and deploy
   - Your site will be live at `https://[site-name].netlify.app`

### Method 2: Manual Deployment via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Authenticate**
   ```bash
   netlify login
   ```

3. **Build locally**
   ```bash
   npm install
   npm run build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Method 3: Drag & Drop (One-time)

1. **Build locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Your site will be deployed instantly

## Configuration

### netlify.toml

The `netlify.toml` file contains all deployment configuration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22.13.0"
```

### Environment Variables

1. **In Netlify Dashboard**
   - Go to Site settings → Build & deploy → Environment
   - Add any required environment variables
   - Redeploy to apply changes

2. **Local Testing**
   - Create `.env.local` file (not committed to git)
   - Add variables with `VITE_` prefix
   - Variables are available in browser via `import.meta.env.VITE_*`

## Redirects & Rewrite Rules

The `public/_redirects` file handles SPA routing:

```
/*    /index.html   200
```

This ensures all non-file requests are served `index.html` for React Router to handle.

## Performance Optimization

### Caching Headers

Configured in `netlify.toml`:

- **Static assets** (JS, CSS, images): 1 year cache
- **HTML**: No cache (always fresh)
- **Security headers**: Enabled by default

### Monitoring

1. **Netlify Analytics**
   - Go to Site settings → Analytics
   - Enable Netlify Analytics for traffic insights

2. **Build Logs**
   - Go to Deploys → Build logs
   - Check for warnings or errors

3. **Performance**
   - Use Lighthouse in Chrome DevTools
   - Check Core Web Vitals in PageSpeed Insights

## Troubleshooting

### Build Fails

**Error: "npm: command not found"**
- Solution: Netlify uses Node 18 by default. Add `.nvmrc` file (already included)

**Error: "Cannot find module"**
- Solution: Run `npm install` locally and commit `package-lock.json`

### Site Not Loading

**Error: "Cannot GET /"**
- Solution: Check `_redirects` file is in `public/` folder
- Verify `netlify.toml` has correct publish directory

**Error: "404 Not Found"**
- Solution: Clear browser cache and hard refresh (Ctrl+Shift+R)

### Deployment Stuck

**Solution:**
1. Check build logs in Netlify Dashboard
2. Try manual redeploy: Go to Deploys → Trigger deploy
3. Clear cache: Site settings → Build & deploy → Clear cache and redeploy

## Custom Domain

1. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `hari-automobiles.com`)

2. **Configure DNS**
   - Update your domain registrar's DNS settings
   - Point to Netlify nameservers or add CNAME record
   - Follow Netlify's instructions for your registrar

3. **SSL Certificate**
   - Netlify automatically provisions free SSL via Let's Encrypt
   - Certificate renews automatically

## Monitoring & Maintenance

### Regular Checks

- Monitor build status in Netlify Dashboard
- Check analytics for traffic patterns
- Review error logs weekly
- Update dependencies monthly

### Backup & Recovery

- GitHub repository is your backup
- Netlify stores build history (30 days free)
- Export site data regularly if needed

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://support.netlify.com
- **Community**: https://community.netlify.com

## Next Steps

1. Set up custom domain
2. Enable Netlify Analytics
3. Configure form handling (FormSubmit.co already integrated)
4. Set up monitoring and alerts
5. Plan regular content updates
