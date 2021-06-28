import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { useIsMobile } from "@hooks"
import { logOutboundLink } from "@utils"
import { Container, OutboundLink } from "@components"

const StyledMessageTop = styled.aside`
  ${tw`py-4 sm:py-6 bg-black`}

  ${Container} {
    ${tw`text-gray-400 text-center text-xs sm:text-sm`}

    a {
      ${tw`text-white hover:underline`}

      &.active-link {
        ${tw`hover:no-underline hover:cursor-not-allowed`}
      }
    }
  }
`

const statement = (
  <Link
    to="/statement"
    activeClassName="active-link"
  >
    statement
  </Link>
)

const eji = (
  <OutboundLink
    href="https://eji.org"
    onClick={() => logOutboundLink("EJI")}
  >
    Equal Justice Initiative
  </OutboundLink>
)

export default function MessageTop() {
  const { isMobile } = useIsMobile()

  return (
    <StyledMessageTop>
      {!isMobile ? (
        <Container
          as="p"
          size="default"
        >
          Black Lives Matter. Support the {eji} and read my {statement}.
        </Container>
      ) : (
        <Container as="p">
          Please read my {statement}.
        </Container>
      )}
    </StyledMessageTop>
  )
}