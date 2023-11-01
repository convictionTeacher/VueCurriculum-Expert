/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_TOKEN: 'secret_ATdKADQsT14BkKfD7yZoKF4jnd4PBh4UQ30EkhIl1DN',
    NOTION_DATABASE_ID: 'e75061feeca144ea95cd2af10c880ff8'
  }
}

module.exports = nextConfig
