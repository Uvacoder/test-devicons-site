import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import { useIsMobile } from "@hooks"
import { version, logOutboundLink } from "@utils"
import { Container, Button, OutboundLink, Icon } from "@components"

const StyledHeader = styled(Container)`
  ${tw`h-20 sm:h-24 sticky top-0 bg-white z-10`}

  nav {
    ${tw`h-full flex items-center justify-between border-b-2 border-gray-200`}

    .left-side {
      ${tw`flex items-center space-x-5`}

      a {
        ${tw`font-bold text-xl sm:text-2xl text-black hover:underline`}

        &.active-logo {
          ${tw`hover:no-underline hover:cursor-not-allowed`}
        }
      }

      span {
        ${tw`px-2 py-1 rounded-md bg-blue-100 text-blue-600 text-xs font-medium`}
      }
    }

    .right-side {
      ${tw`flex items-center space-x-5`}

      .internal-links {
        ${tw`flex items-center space-x-5`}

        a {
          ${tw`text-sm hover:underline hover:text-black font-medium duration-200`}

          &.active-link {
            ${tw`hover:no-underline hover:cursor-not-allowed text-gray-400`}
          }
        }
      }
    }

    &.nav-mob {
      ${tw``}

      .overlay {
        ${tw`fixed w-full h-screen inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm`}

        span {
          ${tw`absolute w-full p-5 top-0 flex justify-end`}

          svg {
            ${tw`w-8 h-8 text-white`}
          }
        }

        .internal-links {
          ${tw`flex flex-col space-y-10 h-screen items-center justify-center`}
          
          a {
            ${tw`text-gray-400 text-sm font-medium`}

            &.active-link {
              ${tw`text-white text-2xl font-bold`}

              &::after {
                content: "Current";
                ${tw`absolute ml-3 text-xs text-blue-500 font-normal`}
              }
            }
          }
        }

        .external-links {
          ${tw`absolute w-full p-5 bottom-0 flex justify-center space-x-5`}

          a {
            ${tw`text-white text-sm`}
          }
        }
      }
    }
  }
`

const LeftSide = () => (
  <div className="left-side">
    <Link
      to="/"
      activeClassName="active-logo"
    >
      Devfont
    </Link>
    <span>
      v{version}
    </span>
  </div>
)

const InternalLinks = () => (
  <div className="internal-links">
    <Link
      to="/"
      activeClassName="active-link"
    >
      Icons
    </Link>
    <Link
      to="/usage"
      activeClassName="active-link"
    >
      Usage
    </Link>
  </div>
)

const ExternalLinks = () => (
  <div className="external-links">
    <OutboundLink
      href="https://github.com/alexperronnet/devfont"
      onClick={() => logOutboundLink("GitHub")}
    >
      GitHub
    </OutboundLink>
    <OutboundLink
      href="https://github.com/alexperronnet/devfont/issues"
      onClick={() => logOutboundLink("Request")}
    >
      Request
    </OutboundLink>
  </div>
)

export default function Header() {
  const { isMobile } = useIsMobile()
  const [overlay, setOverlay] = React.useState(false)

  React.useEffect(() => {
    const body = document.body
    const header = document.querySelector("header")

    if (typeof body !== "undefined") {
      if (overlay) {
        body.style.setProperty("overflow", "hidden")
        header.style.setProperty("z-index", "20")
      } else {
        body.style.removeProperty("overflow")
        header.style.removeProperty("z-index")
      }
    }
  }, [overlay])

  return (
    <StyledHeader
      as="header"
      size="default"
    >
      {!isMobile ? (
        <nav>
          <LeftSide />
          <div className="right-side">
            <InternalLinks />
            <Button
              href="https://github.com/alexperronnet/devfont/issues"
              icon="lifebuoy"
              color="red"
              onClick={() => logOutboundLink("Request")}
            >
              Request
            </Button>
          </div>
        </nav>
      ) : (
        <nav className="nav-mob">
          <LeftSide />
          <Icon
            name="menu-3"
            onClick={() => setOverlay(!overlay)}
          />
          {overlay && (
            <div className="overlay">
              <span>
                <Icon
                  name="x"
                  onClick={() => setOverlay(!overlay)}
                />
              </span>
              <InternalLinks />
              <ExternalLinks />
            </div>
          )}
        </nav>
      )}
    </StyledHeader>
  )
}