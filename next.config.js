/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "Host",
            value: "linkedin.ericwei.fyi",
          },
        ],
        permanent: true,
        destination: "https://www.linkedin.com/in/eric-wei-92a0b2171/",
      },
    ];
  },
};

module.exports = nextConfig;
