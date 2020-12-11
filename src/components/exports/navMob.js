import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { eventOutbound, version } from "@utils"
import { Icon, ThemeToggle, OutboundLink } from "@components"

export const NavMob = () => {
  const [showOverlay, setShowOverlay] = React.useState(false)

  React.useEffect(() => {
    const body = document.body
    const header = document.querySelector("header")

    if (typeof body !== "undefined") {
      if (showOverlay) {
        body.style.setProperty("overflow", "hidden")
        header.style.setProperty("z-index", "20")
      } else {
        body.style.removeProperty("overflow")
        header.style.removeProperty("z-index")
      }
    }
  }, [showOverlay])

  return (
    <StyledNavMob>
      <Logo to="/">Devfont</Logo>
      <Icon name="menu" onClick={() => setShowOverlay(!showOverlay)} />
      {showOverlay && (
        <Overlay.Wrapper>
          <Overlay.Top>
            <ThemeToggle />
            <Icon name="x" onClick={() => setShowOverlay(!showOverlay)} />
          </Overlay.Top>
          <Overlay.Center>
            <Link to="/" activeStyle={activeLink}>
              Icons
            </Link>
            <Link to="/usage" activeStyle={activeLink}>
              Usage
            </Link>
          </Overlay.Center>
          <Overlay.Bottom>
            <Extlink
              href="https://paypal.com/paypalme/alexperronnet/5"
              onClick={() => eventOutbound("Paypal Donation")}
            >
              Donate
            </Extlink>
            <Extlink
              href="https://github.com/alexperronnet/devfont/issues"
              onClick={() => eventOutbound("GitHub Request")}
            >
              Request
            </Extlink>
            <Extlink
              href="https://github.com/alexperronnet/devfont"
              onClick={() => eventOutbound("GitHub Homepage")}
            >
              GitHub
            </Extlink>
          </Overlay.Bottom>
        </Overlay.Wrapper>
      )}
    </StyledNavMob>
  )
}

const StyledNavMob = styled.nav`
  ${tw`h-full flex justify-between items-center`}
`

const Logo = styled(Link)`
  ${tw`flex items-center font-bold text-lg text-secondary uppercase`}

  &:after {
    ${tw`ml-3 px-2 py-1 bg-secondary text-primary text-xs font-medium rounded-sm lowercase`}
    content: "v.${version}";
  }
`

const Overlay = {
  Wrapper: styled.div`
    ${tw`fixed w-full h-screen inset-0 bg-secondary opacity-90`}
  `,

  Top: styled.div`
    ${tw`absolute w-full p-5 top-0 flex justify-between items-center text-secondary`}
  `,

  Center: styled.div`
    ${tw`flex flex-col space-y-8 h-screen justify-center items-center`}
  `,

  Bottom: styled.div`
    ${tw`absolute w-full p-5 bottom-0 flex justify-center space-x-5`}
  `
}

const Extlink = styled(OutboundLink)`
  ${tw`text-sm text-secondary`}
`

const activeLink = tw`text-3xl text-secondary line-through`
