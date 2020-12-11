import React from "react"
import { GlobalStyles } from "twin.macro"

import {
  CustomStyles,
  Document,
  MessageTop,
  Container,
  Header,
  Footer
} from "@components"

export const Wrapper = ({ title, children }) => (
  <div>
    <GlobalStyles />
    <CustomStyles />
    <Document title={title} />
    <MessageTop />
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  </div>
)
