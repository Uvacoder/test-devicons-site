import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Head({ pageTitle }) {
  class Hidden extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: document.title,
        hiddenTitle: 'Come Back...'
      }
    }
  
    componentDidMount() {
      document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }
  
    componentWillUnmount() {
      document.removeEventListener('visibilitychange', this.handleVisibilityChange)
    }
  
    handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = this.state.hiddenTitle
      }
      else {
        document.title = this.state.title
      }
    }
  
    render() {
      return (<div/>)
    }
  }

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

  return (
    <div>
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
    <Hidden />
    </div>
  )
}