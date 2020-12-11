import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { useIsMobile } from "@hooks"
import { eventOutbound } from "@utils"
import { Container, OutboundLink } from "@components"

export const MessageTop = () => {
  const { isMobile } = useIsMobile()

  return (
    <StyledMessageTop>
      {!isMobile ? (
        <Container as="p">
          Black Lives Matter. Support the <Eji /> and read my <Statement />.
        </Container>
      ) : (
        <Container as="p">
          Read my <Statement />.
        </Container>
      )}
    </StyledMessageTop>
  )
}

const Eji = () => (
  <StyledLink
    as={OutboundLink}
    href="https://eji.org"
    onClick={() => eventOutbound("Equal Justice Initiative")}
  >
    Equal Justice Initiative
  </StyledLink>
)

const Statement = () => (
  <StyledLink as={Link} to="/statement" activeStyle={activeLink}>
    statement here
  </StyledLink>
)

const StyledMessageTop = styled.aside`
  ${tw`py-4 sm:py-6 bg-secondary text-center text-xs sm:text-sm`}
`

const StyledLink = styled.a`
  ${tw`text-secondary hover:underline`}
`

const activeLink = tw`line-through cursor-not-allowed`
