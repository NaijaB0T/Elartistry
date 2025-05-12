# Selasi Prince Portfolio - Setup Guide

This document provides instructions for setting up and running the Selasi Prince portfolio website.

## Project Structure

The project is built with SvelteKit and includes:

- Modern design with smooth animations
- Responsive layout for all devices
- Dark theme with gold accent colors
- Image galleries with fullscreen viewing
- Portfolio categorization
- Dynamic project pages
- Contact form
- Custom cursor and animations

## Setup Instructions

### 1. Install Dependencies

First, install all required dependencies:

```bash
npm install
```

### 2. Image Setup

**Important**: The portfolio requires the images to be accessible from the web application. You have two options:

#### Option A: Create a symbolic link (recommended, requires admin privileges)

Open a Command Prompt as Administrator, then run:

```bash
cd "C:\Users\USER\Desktop\Code\Claude Desktop Apps\Selartista\portfolio webapp"
mklink /D "static\images" "images"
```

This creates a link from the images folder to the static/images folder that the webapp can access.

#### Option B: Manually copy images

If you can't create a symbolic link, manually copy all images from the `images` folder to the `static/images` folder:

```bash
mkdir -p static/images
copy images\*.jpg static\images\
```

### 3. Development Server

Start the development server:

```bash
npm run dev
```

This will start the server at http://localhost:5173/ by default.

### 4. Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a production-ready build in the `build` directory.

## Customization

To customize the portfolio:

1. Edit `src/lib/photoData.js` to update portfolio information
2. Modify colors in `tailwind.config.js`
3. Update profile information in the various components
4. Add your own images to the images directory

## Responsive Design

The portfolio is fully responsive and works on:
- Mobile phones
- Tablets
- Desktop computers
- Large displays

## Browser Compatibility

Tested and working on:
- Chrome
- Firefox
- Safari
- Edge