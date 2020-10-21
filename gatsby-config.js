const websiteConfig = {
  name: 'Devfont',
  author: '@alexperronnet',
  url: 'https://devfont.com',
  gaTrackingId: 'UA-156157580-3',
  description: 'Beautiful open source hand-crafted SVG icon set for designers and developers. Free for both personal and commercial use. Made by @alexperronnet'
}

module.exports = {
  siteMetadata: {
    title: websiteConfig.name,
    author: websiteConfig.author,
    siteUrl: websiteConfig.url,
    description: websiteConfig.description
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-minify-html',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: websiteConfig.name,
        short_name: websiteConfig.name,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'static/favicon.png',
        icon_options: {
          purpose: 'maskable'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: websiteConfig.url
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: websiteConfig.gaTrackingId
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: websiteConfig.url,
        sitemap: `${websiteConfig.url}/sitemap.xml`,
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ]
}