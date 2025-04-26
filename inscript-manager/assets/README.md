# App Assets

This directory contains the images and icons used by the Ordinarinos Inscription Manager.

## Required Files

For proper display in Umbrel OS, you need to provide the following files:

### 1. `icon.png` (Required)
- This is the main app icon that will be displayed in the Umbrel OS dashboard
- Recommended size: 512x512 pixels 
- Format: PNG with transparency
- This file MUST be a PNG file, not an SVG

### 2. Screenshots (Optional)
- You can add screenshots of your app to showcase its functionality
- Name them sequentially: `screenshot-1.png`, `screenshot-2.png`, etc.
- Recommended size: 1280x720 pixels
- Format: PNG

## Converting SVG to PNG

If you have an SVG icon, you need to convert it to PNG format:

1. Use an online converter like [SVG to PNG](https://svgtopng.com/)
2. Use an image editor like GIMP, Photoshop, or Figma
3. Use command-line tools:
   ```
   npm install -g svg-to-png
   svg-to-png icon.svg -o ./
   ```

## Testing Icon Display

If your icon is not displaying in Umbrel:
1. Ensure it's a PNG file (not SVG)
2. Check that the path in `umbrel-app.yml` is correct: `icon: ./assets/icon.png`
3. Verify the image isn't corrupted by opening it in a browser or image viewer 