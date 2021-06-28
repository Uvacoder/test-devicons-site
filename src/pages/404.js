import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { Layout, Icon, Container } from "@components"

const StyledSection = styled(Container)`
  ${tw`py-14 sm:py-20 flex flex-col space-y-8 items-center text-center`}

  svg {
    ${tw`h-16 w-16 sm:h-24 sm:w-24 text-gray-300`}
  }

  a {
    ${tw`text-blue-500 hover:underline`}
  }
`

const home = (
  <Link to="/">
    here
  </Link>
)

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <StyledSection as="section" size="small">
        <Icon name="bug" />
        <h1>
          Sorry, that doesn't exist! 
        </h1>
        <h2>
          Oops, how'd you end up here?
        </h2>
        <p>
          The princess is in another castle... Click {home} for back to safety.
        </p>
      </StyledSection>
    </Layout>
  )
}