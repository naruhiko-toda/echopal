/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const settings = {
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  }
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
