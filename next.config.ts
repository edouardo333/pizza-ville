import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local-only imagery (public/images/**) — no remote patterns needed.
    qualities: [75, 85, 90],
    formats: ["image/webp"],
  },
};

export default nextConfig;
