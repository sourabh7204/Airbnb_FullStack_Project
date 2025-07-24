const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Corrected from process.eve
  api_key: process.env.CLOUD_API_KEY, // Ensure this matches your .env
  api_secret: process.env.CLOUD_API_SECRET, // Ensure this matches your .env
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
