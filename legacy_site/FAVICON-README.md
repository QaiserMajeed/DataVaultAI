# Favicon Generation Instructions

This directory contains the logo and favicon source files for Data Valut AI.

## Files Included

- `logo.svg` - Full logo with text (light mode)
- `logo-dark.svg` - Full logo with text (dark mode)
- `favicon.svg` - Icon-only version for favicon
- `generate-favicons.html` - Tool to generate PNG favicons
- `manifest.json` - PWA manifest file

## Generating PNG Favicons

To generate the PNG favicon files in all required sizes:

1. Open `generate-favicons.html` in your web browser
2. Click the "Generate All Favicons" button
3. The following files will be automatically downloaded:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
4. Move all downloaded PNG files to the root directory of the project

## Alternative: Using Online Tools

If you prefer, you can use online favicon generators:

1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload `favicon.svg`
3. Customize settings if needed
4. Download and extract the generated files
5. Place them in the root directory

## Favicon Sizes Explained

- **16x16 & 32x32**: Browser tabs and bookmarks
- **180x180 (apple-touch-icon)**: iOS home screen icon
- **192x192**: Android home screen icon
- **512x512**: High-resolution Android icon and splash screen

## Logo Design

The logo features:
- A vault/database frame representing data security
- Three horizontal data layers symbolizing data storage
- Connected neural nodes representing AI/machine learning
- Blue-purple-pink gradient color scheme matching the brand
- Responsive design that works in both light and dark modes

## Usage in HTML

The website automatically switches between light and dark mode logos using:

```html
<img src="logo.svg" alt="Data Valut AI" class="h-10 dark:hidden">
<img src="logo-dark.svg" alt="Data Valut AI" class="h-10 hidden dark:block">
```

## Customization

To modify the logo colors or design, edit the SVG files using:
- Any text editor (for code-level changes)
- Vector graphics software (Adobe Illustrator, Figma, Inkscape)
- Online SVG editors (SVG-Edit, Vectr)

The logo uses inline gradients that can be easily adjusted by changing the color stop values in the `<linearGradient>` definitions.
