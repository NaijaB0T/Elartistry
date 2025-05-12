# Selasi Prince - Photography Portfolio

A beautiful and responsive portfolio website for photographer and filmmaker Selasi Prince, based in Accra, Ghana.

## Features

- Modern, elegant design with animations
- Responsive layout for all device sizes
- Image gallery with fullscreen viewing
- Categorized portfolio sections
- Project pages for featured work
- Contact form with validation
- Dark theme with accent colors
- Custom cursor effect

## Technologies

- SvelteKit - Frontend framework
- TailwindCSS - Styling and UI
- GSAP - Animations
- Shadcn UI - UI components

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up image folder:
   - Copy all photography images to the `/static/images/` directory
   - Alternatively, create a symbolic link to your images folder (requires administrator privileges):
     ```
     # On Windows (Run Command Prompt as Administrator)
     mklink /D "C:\Users\USER\Desktop\Code\Claude Desktop Apps\Selartista\portfolio webapp\static\images" "C:\Users\USER\Desktop\Code\Claude Desktop Apps\Selartista\portfolio webapp\images"
     
     # On Mac/Linux
     ln -s "/path/to/images" "/path/to/project/static/images"
     ```
   - If you can't create a symbolic link, manually copy all images from the `images` folder to the `static/images` folder

4. Start development server:
   ```
   npm run dev
   ```

5. Build for production:
   ```
   npm run build
   ```

## Image Structure

The portfolio uses the following image structure:
- Featured images for homepage
- Category-specific images
- Project-specific images
- About page images
- Testimonial images

## Customization

- Edit `src/lib/photoData.js` to update portfolio information
- Modify colors in `tailwind.config.js`
- Adjust animations in `src/app.css`