const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
  target: "serverless",
  imagesFolder: "images",
  handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif"],
  reactStrictMode: true,
  env: {
    EMJS_SERVICE_ID: process.env.EMJS_SERVICE_ID,
    EMJS_TEMPLATE_ID: process.env.EMJS_TEMPLATE_ID,
    EMJS_USER_ID: process.env.EMJS_USER_ID,
  },
});
