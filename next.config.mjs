/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                
              },
          ],
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
};

export default nextConfig;
