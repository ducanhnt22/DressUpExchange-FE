/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/prn221-save-image.appspot.com/o/**",
      },
    ],
  },
  // env: {
  //   API_URL: "https://dressupexchange.somee.com/api",
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/product",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
