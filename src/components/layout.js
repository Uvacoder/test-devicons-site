import Head from "next/head"
import Link from "next/link"
import config from "@config/website"

function Seo({ pageTitle }) {
  React.useEffect(() => {
    window.onload = function() {
      const pageTitle = document.title
      const inactiveMessage = `Come back to ${config.name}`

      document.addEventListener("visibilitychange", function(e) {
        const isPageActive = !document.hidden

        if(!isPageActive) {
          document.title = inactiveMessage
        } else {
          document.title = pageTitle
        }
      })
    }
  })

  const title = `${config.name} \u2013 ${pageTitle}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={config.description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:creator" content={config.author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={`${config.url}/og-image.png`} />
      <meta property="og:type" content="website" />
    </Head>
  )
}

function Container(props) {
  return <div className="container" {...props} />
}

function OutboundLink(props) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function MessageTop() {
  const linkStyle = "text-gray-300 hover:text-current hover:underline duration-200"

  return (
    <aside className="py-4 bg-black text-white text-xs text-center">
      <Container>
        Black Lives Matter. Support the {""}
        <OutboundLink href="https://eji.org" className={linkStyle}>
          Equal Justice Initiative
        </OutboundLink>
        {""} and read my {""}
        <Link href="/statement">
          <a className={linkStyle}>
            statement here.
          </a>
        </Link>
      </Container>
    </aside>
  )
}

function Header() {
  const btnStyle = "px-3 py-2 rounded-sm duration-200 text-white text-xs sm:text-sm bg-blue-600 hover:bg-blue-800"

  return (
    <header className="py-6 flex items-center justify-between border-b-2 border-gray-100">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-xl">
          <Link href="/">
            <a>Devfont</a>
          </Link>
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <OutboundLink href="https://paypal.com/paypalme/alexperronnet/5" className={btnStyle}>
          Donate
        </OutboundLink>
        <OutboundLink href="https://github.com/devfont/devfont/issues" className={btnStyle}>
          Request
        </OutboundLink>
      </div>
    </header>
  )
}

function Footer() {
  const linkStyle = "text-blue-600 border-b-2 border-blue-100 hover:bg-blue-50 duration-200"

  return (
    <footer className="py-6 flex flex-col sm:flex-row justify-between gap-3 text-sm border-t-2 border-gray-100">
      <div>
        <OutboundLink href="https://alexperronnet.io" className={linkStyle}>
          Mabe by @alexperronnet
        </OutboundLink>
      </div>
      <div>
        <OutboundLink href="https://github.com/devfont/devfont/releases" className={linkStyle}>
          Released under MIT License
        </OutboundLink>
      </div>
      
      
    </footer>
  )
}

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Seo pageTitle={pageTitle} />
      <MessageTop />
      <Container>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </Container>
    </div>
  )
}