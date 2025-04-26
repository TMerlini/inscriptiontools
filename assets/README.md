# App Store Assets

This directory contains the images and icons used by the Inscription Tools Store.

## Required Files

For proper display in Umbrel OS, you need to provide the following files:

### 1. `store-icon.png` (Required)
- This is the main store icon that will be displayed in the Umbrel OS community stores list
- Recommended size: 512x512 pixels 
- Format: PNG with transparency
- This file MUST be a PNG file, not an SVG

## Important Notes

1. Umbrel OS requires PNG format for icons, not SVG
2. If your icons are not displaying:
   - Verify that the path in `umbrel-app-store.yml` points to `./assets/store-icon.png`
   - Check that the PNG file is valid and not corrupted
   - Ensure the file permissions allow it to be read

## Converting SVG to PNG

If you have an SVG icon, you need to convert it to PNG format:

1. Use an online converter like [SVG to PNG](https://svgtopng.com/)
2. Use an image editor like GIMP, Photoshop, or Figma
3. Use command-line tools:
   ```
   npm install -g svg-to-png
   svg-to-png store-icon.svg -o ./
   ``` 