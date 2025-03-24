import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "http",
            hostname: "127.0.0.1",
            port: "",
            pathname: "/assets/**"
          }],
        domains: ["127.0.0.1"], // Allow images from localhost storage
    },
};

export default withNextIntl(nextConfig);
