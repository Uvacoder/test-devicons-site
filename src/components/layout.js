import React from "react"

import { GlobalStyles, Head, MessageTop, Header, Footer, Container } from "@components"

export default function Layout({ title, children }) {
  return (
    <div>
      <GlobalStyles />
      <Head title={title} />
      <MessageTop />
      <Header />
      <Container
        as="main"
        size="default"
      >
        {children}
      </Container>
      <Footer />
    </div>
  )
}