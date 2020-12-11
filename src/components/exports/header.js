import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { eventOutbound } from "@utils"
import { useIsMobile } from "@hooks"
import { NavMob, ThemeToggle, Button, OutboundLink } from "@components"

export const Header = () => {
  const { isMobile } = useIsMobile()

  return (
    <StyledHeader>
      {isMobile ? (
        <NavMob />
      ) : (
        <Nav>
          <Side>
            <Logo to="/" activeStyle={activeLogo}>
              Devfont
            </Logo>
            <StyledLink to="/" activeStyle={activeLink}>
              Icons
            </StyledLink>
            <StyledLink to="/usage" activeStyle={activeLink}>
              Usage
            </StyledLink>
          </Side>
          <Side>
            <ThemeToggle />
            <Button
              as={OutboundLink}
              blue="true"
              value="Donate"
              icon="coin"
              href="https://paypal.com/paypalme/alexperronnet/5"
              onClick={() => eventOutbound("Paypal Donation")}
            />
            <Button
              as={OutboundLink}
              red="true"
              value="Request"
              icon="lifebuoy"
              href="https://github.com/alexperronnet/devfont/issues"
              onClick={() => eventOutbound("GitHub Request")}
            />
          </Side>
        </Nav>
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  ${tw`sticky top-0 z-10 h-20 sm:h-24 bg-primary border-b-2 border-secondary`}
`

const Nav = styled.nav`
  ${tw`h-full flex items-center justify-between`}
`

const Side = styled.nav`
  ${tw`flex items-center space-x-5`}
`

const Logo = styled(Link)`
  ${tw`font-bold text-xl text-secondary uppercase hover:underline`}
`

const StyledLink = styled(Link)`
  ${tw`text-sm hover:text-secondary`}
`

const activeLogo = tw`no-underline cursor-not-allowed`

const activeLink = tw`text-secondary line-through cursor-not-allowed`
