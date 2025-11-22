# Netlify Deployment Instructions

## Current Issue
The site is showing MIME type errors because Netlify is not building/serving the correct files.

## Steps to Fix

### 1. Check Netlify Build Settings
Go to: **Netlify Dashboard** → **Your Site** → **Site settings** → **Build & deploy** → **Build settings**

Ensure these settings are configured:
- **Base directory:** (leave empty)
- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 or higher

### 2. Clear Cache and Redeploy
1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** dropdown
3. Select **"Clear cache and deploy site"**

### 3. Check Build Logs
After triggering a new deploy:
1. Click on the deploy in progress
2. Check the build logs for any errors
3. Ensure you see:
   - ✅ Dependencies installing
   - ✅ `npm run build` executing
   - ✅ Build completing successfully
   - ✅ Files being published from `dist/` folder

### 4. Verify netlify.toml is Being Used
The `netlify.toml` file in the repository should override any dashboard settings. Ensure:
- The file is committed to git
- It's in the root directory
- No syntax errors

### 5. Environment Variables (if needed)
If you have any environment variables:
- Go to **Site settings** → **Build & deploy** → **Environment**
- Add any required environment variables

## Common Issues

### Issue: Build Fails
**Solution:** Check the build logs for specific errors. Common causes:
- Missing dependencies
- Node version mismatch
- Build script errors

### Issue: Files Not Found (404)
**Solution:** Ensure publish directory is set to `dist` not root directory

### Issue: MIME Type Errors
**Solution:**
1. Ensure build completed successfully
2. Clear Netlify cache and redeploy
3. Check that `netlify.toml` headers are being applied

### Issue: Favicon 404
**Solution:** The favicon is built into `dist/` from `public/favicon.svg`. If build succeeds, this should work automatically.

## Verification

After successful deployment, check:
- ✅ No console errors in browser
- ✅ Favicon loads correctly
- ✅ All JavaScript bundles load from `/assets/` directory
- ✅ No MIME type errors

## File Structure (Production)
```
dist/
├── index.html          (loads /assets/index-xxx.js)
├── favicon.svg
├── _redirects
├── assets/
│   ├── index-xxx.js   (your bundled JavaScript)
│   └── index-xxx.css  (your bundled CSS)
```

## Support
If issues persist:
1. Check Netlify build logs
2. Ensure netlify.toml is in git repository root
3. Verify no .netlify folder conflicts
4. Try deploying from a different branch
