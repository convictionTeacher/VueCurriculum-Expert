/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_TOKEN_FOR_BROWSER: process.env.NOTION_TOKEN,
    NOTION_DATABASE_ID_FOR_BROWSER: process.env.NOTION_DATABASE_ID
  }
}

module.exports = nextConfig
