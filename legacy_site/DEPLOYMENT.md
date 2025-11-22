# Data Valut AI - Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying to production, ensure you complete the following:

### ✅ Content Updates

- [ ] Replace placeholder email (contact@datavalutai.co.uk) with real company email
- [ ] Update phone number (+44 (0) 20 3769 7000) with real contact number
- [ ] Add actual UK company registration number in footer
- [ ] Replace emoji logo (🔒) with actual company logo
- [ ] Add real company address details
- [ ] Review and customize all case studies with actual client data (if permitted)
- [ ] Verify all service descriptions match actual offerings

### ✅ Legal & Compliance

- [ ] Create Privacy Policy page
- [ ] Create GDPR Statement page
- [ ] Create Terms of Service page
- [ ] Add Cookie Consent banner (if using analytics)
- [ ] Verify all compliance claims are accurate
- [ ] Add Data Protection Officer contact information
- [ ] Review all regulatory certifications mentioned

### ✅ Technical Optimization

- [ ] Compress and optimize all images
- [ ] Test website on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive design on various mobile devices
- [ ] Run accessibility audit (WAVE, axe, or Lighthouse)
- [ ] Test all forms and CTAs
- [ ] Verify all internal and external links work
- [ ] Add favicon (16x16, 32x32, Apple Touch Icon)
- [ ] Configure robots.txt for SEO
- [ ] Add sitemap.xml for search engines

### ✅ SEO Setup

- [ ] Configure Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Set up Google Analytics (with GDPR consent)
- [ ] Add structured data markup (Schema.org)
- [ ] Optimize meta descriptions for all pages
- [ ] Add Open Graph tags for social media sharing
- [ ] Add Twitter Card tags

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended for Simplicity)

**Best for**: Quick deployment, automatic HTTPS, continuous deployment

1. **Sign up** at [netlify.com](https://netlify.com)

2. **Connect your repository**:
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

3. **Deploy**:
   - Click "New site from Git"
   - Select your GitHub repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

4. **Configure custom domain**:
   - Go to Domain settings
   - Add custom domain: `datavalutai.co.uk`
   - Update DNS records at your domain registrar:
     ```
     A Record: @ → 75.2.60.5
     CNAME: www → your-site.netlify.app
     ```

5. **Enable HTTPS**: Automatic with Let's Encrypt

**Estimated Time**: 10-15 minutes

---

### Option 2: Vercel

**Best for**: Developer experience, excellent performance

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

3. **Deploy**:
   - Via web: Import GitHub repository
   - Via CLI:
     ```bash
     cd DataVaultAI
     vercel
     ```

4. **Configure domain**: Similar to Netlify in project settings

**Estimated Time**: 10 minutes

---

### Option 3: GitHub Pages

**Best for**: Free hosting, simple static sites

1. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

2. **Access site**: `https://yourusername.github.io/DataVaultAI`

3. **Custom domain**:
   - Add `CNAME` file to repository root:
     ```
     datavalutai.co.uk
     ```
   - Configure DNS:
     ```
     A Records:
     @ → 185.199.108.153
     @ → 185.199.109.153
     @ → 185.199.110.153
     @ → 185.199.111.153

     CNAME:
     www → yourusername.github.io
     ```

4. **Enable HTTPS**: Automatic in settings

**Estimated Time**: 15-20 minutes

---

### Option 4: AWS S3 + CloudFront

**Best for**: Enterprise-grade hosting, full control, scalability

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://datavalutai.co.uk
   aws s3 website s3://datavalutai.co.uk --index-document index.html --error-document index.html
   ```

2. **Upload files**:
   ```bash
   aws s3 sync . s3://datavalutai.co.uk --acl public-read --exclude ".git/*" --exclude "README.md"
   ```

3. **Configure S3 bucket policy**:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::datavalutai.co.uk/*"
       }
     ]
   }
   ```

4. **Create CloudFront Distribution**:
   - Origin: S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Alternate Domain Names (CNAMEs): datavalutai.co.uk, www.datavalutai.co.uk
   - SSL Certificate: Request from ACM (us-east-1)
   - Default Root Object: index.html

5. **Configure Route 53** (or your DNS provider):
   ```
   A Record (Alias): @ → CloudFront distribution
   CNAME: www → CloudFront distribution
   ```

6. **Enable compression and caching**:
   - Cache Policy: CachingOptimized
   - Compress Objects Automatically: Yes

**Estimated Time**: 30-45 minutes

**Monthly Cost**: ~£5-15 depending on traffic

---

### Option 5: Azure Static Web Apps

**Best for**: Microsoft ecosystem, enterprise compliance

1. **Create Static Web App**:
   ```bash
   az staticwebapp create \
     --name datavalutai \
     --resource-group DataValutAI-RG \
     --source https://github.com/yourusername/DataVaultAI \
     --location "West Europe" \
     --branch main \
     --app-location "/" \
     --api-location "" \
     --output-location ""
   ```

2. **Configure custom domain** in Azure Portal

3. **Enable Azure CDN** for global distribution

**Estimated Time**: 20-30 minutes

---

### Option 6: Traditional Web Hosting (cPanel/Plesk)

**Best for**: Existing hosting provider, traditional setup

1. **Upload files via FTP/SFTP**:
   - Connect to your hosting account
   - Navigate to `public_html` or `www` directory
   - Upload all files: `index.html`, `css/`, `js/`, `assets/`

2. **Verify file permissions**:
   - Files: 644
   - Directories: 755

3. **Configure HTTPS**: Request SSL certificate from hosting provider (usually free with Let's Encrypt)

4. **Test**: Visit `https://datavalutai.co.uk`

**Estimated Time**: 15-20 minutes

---

## 🔧 Post-Deployment Configuration

### 1. Performance Optimization

**Enable Compression**:
```apache
# .htaccess (for Apache servers)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

**Browser Caching**:
```apache
# .htaccess
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
</IfModule>
```

### 2. Security Headers

Add to your hosting configuration:

```apache
# .htaccess
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

### 3. Redirects (WWW to non-WWW or vice versa)

```apache
# .htaccess - Redirect www to non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

### 4. Custom 404 Page

Create `404.html` with appropriate branding and helpful links.

---

## 📊 Monitoring & Analytics

### Google Analytics 4 (with GDPR Compliance)

1. **Create GA4 property** at [analytics.google.com](https://analytics.google.com)

2. **Add tracking code** to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics (Add after implementing cookie consent) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX', {
       'anonymize_ip': true,
       'cookie_flags': 'secure;samesite=none'
     });
   </script>
   ```

3. **Implement Cookie Consent**: Use CookieYes, OneTrust, or similar

### Alternative: Privacy-Focused Analytics

For better GDPR compliance, consider:
- **Plausible**: No cookies, GDPR compliant
- **Fathom**: Simple, privacy-first
- **Umami**: Self-hosted, open-source

---

## 🔍 SEO Post-Deployment

### 1. Submit to Search Engines

- **Google**: [search.google.com/search-console](https://search.google.com/search-console)
- **Bing**: [bing.com/webmasters](https://www.bing.com/webmasters)

### 2. Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://datavalutai.co.uk/</loc>
    <lastmod>2024-11-20</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Create robots.txt

```
User-agent: *
Allow: /
Sitemap: https://datavalutai.co.uk/sitemap.xml
```

---

## 🧪 Testing Checklist

### Pre-Launch Testing

- [ ] **Browser Testing**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile Testing**: iOS Safari, Android Chrome
- [ ] **Performance**: Lighthouse score > 90
- [ ] **Accessibility**: WCAG AA compliance
- [ ] **Links**: All internal and external links work
- [ ] **Forms**: All CTAs and email links functional
- [ ] **Responsive**: Test all breakpoints (320px, 768px, 1024px, 1920px)
- [ ] **Load Time**: First Contentful Paint < 2s
- [ ] **SSL**: HTTPS enabled and working
- [ ] **Security**: Security headers configured

### Tools for Testing

- **Performance**: [web.dev/measure](https://web.dev/measure/), [GTmetrix](https://gtmetrix.com/)
- **Accessibility**: [WAVE](https://wave.webaim.org/), [axe DevTools](https://www.deque.com/axe/)
- **Mobile-Friendly**: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- **Security**: [SecurityHeaders.com](https://securityheaders.com/)
- **SSL**: [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 🚨 Troubleshooting

### Issue: CSS/JS not loading

**Solution**: Check file paths are correct and files are uploaded
```bash
# Verify file structure
ls -R
```

### Issue: Mobile menu not working

**Solution**: Ensure `script.js` is loaded and no console errors

### Issue: Slow loading

**Solution**:
- Enable compression (gzip/brotli)
- Optimize images (use WebP format)
- Enable browser caching
- Use CDN

### Issue: Forms not working

**Solution**: Integrate with backend service (Formspree, Netlify Forms, or custom backend)

---

## 📞 Support

For deployment assistance:
- **Email**: support@datavalutai.co.uk
- **Documentation**: See README.md

---

## 🎉 Success!

Once deployed, your Data Valut AI website will be live at:
**https://datavalutai.co.uk**

Next steps:
1. Monitor analytics
2. Gather user feedback
3. Iterate and improve content
4. Build backlinks for SEO
5. Create blog content
6. Engage with target audience on LinkedIn

---

**Last Updated**: November 2024
