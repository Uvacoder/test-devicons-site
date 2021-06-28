const website = {
  name: "Devfont",
  author: "@alexperronnet",
  url: "https://devfont.com",
  gaTrackingId: "UA-156157580-3",
  description: "Beautiful open source hand-crafted SVG icon set for designers and developers. Free for both personal and commercial use. Made by @alexperronnet"
}

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: website.name,
    author: website.author,
    siteUrl: website.url,
    description: website.description
  },
  plugins: [
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: website.url
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: website.gaTrackingId
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.name,
        short_name: website.shortName,
        start_url: website.url,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: "standalone",
        icon: "static/favicon.png",
        icon_options: {
          purpose: "maskable"
        }
      }
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: website.url,
        sitemap: `${website.url}/sitemap.xml`,
        policy: [
          {
            userAgent: "*",
            allow: "/"
          }
        ]
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components"
  ]
}
