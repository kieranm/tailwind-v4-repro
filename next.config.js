const config = {
  headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Permissions-Policy",
            value:
              "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), clipboard-read=(self), clipboard-write=(self), hid=(), idle-detection=(), serial=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/.well-known/(.*)",
        headers: [
          {
            key: "content-type",
            value: "application/json",
          },
        ],
      },
    ]
  },
  async rewrites() {
    return process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? [
          {
            source: "/.well-known/apple-app-site-association",
            destination: "/.well-known/production/apple-app-site-association",
          },
          {
            source: "/.well-known/assetlinks.json",
            destination: "/.well-known/production/assetlinks.json",
          },
        ]
      : [
          {
            source: "/.well-known/apple-app-site-association",
            destination: "/.well-known/staging/apple-app-site-association",
          },
          {
            source: "/.well-known/assetlinks.json",
            destination: "/.well-known/staging/assetlinks.json",
          },
        ]
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
}

module.exports = config
