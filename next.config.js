/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      {
        domain: "frobby.tech",
        defaultLocale: "en",
        locales: ["en", "id"],
      },
    ],
  },
};

module.exports = nextConfig;
