/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scontent-ams2-1.xx.fbcdn.net",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
