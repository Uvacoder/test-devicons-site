const { createLoader } = require("simple-functional-loader")

module.exports = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          }
        ]
      }
    ]
  },

  experimental: {
    modern: true,
    polyfillsOptimization: true
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (code) {
          return code.replace(/"(.*?)(?<!\\)"/gs, (_, svg) =>
            svg
              .replace(/>(\s|\\n)+</g, "><")
              .replace(/\\n$/, "")
              .replace(/\\"/g, `"`)
              .replace(
                /(\s)([a-z-]+)="([^"]+)"/gi,
                (_, prefix, attr, value) => {
                  const jsxValue = /^[0-9.]+$/.test(value)
                    ? `{${value}}`
                    : `"${value}"`
                  return `${prefix}${attr.replace(
                    /-([a-z])/gi,
                    (_, letter) => `${letter.toUpperCase()}`
                  )}=${jsxValue}`
                }
              )
              .replace(
                /<svg[^>]+>(.*?)<\/svg>/s,
                (svg.match(/</g) || []).length > 3 ? "(<>$1</>)" : "($1)"
              )
          )
        }),
        "raw-loader"
      ]
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]"
          }
        }
      ]
    })

    return config
  }
}