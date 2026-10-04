import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first, then WebP, falling back to the original
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  experimental: {
    // Inline Tailwind's CSS into <head> instead of a render-blocking
    // stylesheet request. Production only.
    inlineCss: true,
  },
};

export default nextConfig;
