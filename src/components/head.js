import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Head({ pageTitle }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
        }
      }
    }
  `)

  const { title, description, author, siteUrl } = data.site.siteMetadata

  React.useEffect(() => {
    window.onload = function() {
      const pageTitle = document.title;
      const inactiveMessage = `Come back to ${title}`
    
      document.addEventListener("visibilitychange", function(e) {
        const isPageActive = !document.hidden
    
        if(!isPageActive){
          document.title = inactiveMessage
        }else {
          document.title = pageTitle
        }
      })
    }
  })

  return (
    <Helmet
      htmlAttributes={{lang: 'en'}}
      titleTemplate={`${title} \u2013 %s`}
      title={pageTitle}
      defer={false}
    >
      <meta name='description' content={description} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:creator' content={author} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${siteUrl}/og-image.png`} />
    </Helmet>
  )
}