const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
  target: "serverless",
  imagesFolder: "images",
  handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif"],
  reactStrictMode: true,
});
