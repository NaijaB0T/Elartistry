import { e as error } from "../../../../chunks/index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../../../../../images");
async function GET({ params }) {
  const filePath = path.join(imagesDir, params.file);
  try {
    console.log("Requesting image:", filePath);
    if (!fs.existsSync(filePath)) {
      console.error("Image not found:", filePath);
      throw error(404, "Image not found");
    }
    const image = fs.readFileSync(filePath);
    const contentType = getContentType(params.file);
    return new Response(image, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch (err) {
    console.error("Image serving error:", err.message);
    throw error(500, err.message);
  }
}
function getContentType(file) {
  const ext = path.extname(file).toLowerCase();
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}
export {
  GET
};
