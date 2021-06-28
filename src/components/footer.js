import React from "react"
import tw, { styled } from "twin.macro"

import { OutboundLink } from "@components"
import { logOutboundLink } from "@utils"

const StyledFooter = styled.footer`
  ${tw`py-8 sm:py-10 bg-gray-100 border-t-2 border-gray-200`}

  .content {
    ${tw`container flex flex-col-reverse sm:flex-row items-center sm:justify-between`}

    .copyright {
      ${tw`flex flex-col space-y-5`}

      .author {
        ${tw`text-lg sm:text-xl font-bold text-center sm:text-left hover:underline hover:text-black duration-200`}
      }

      small {
        ${tw`text-xs text-gray-400`}

        a {
          ${tw`text-gray-600 hover:text-black hover:underline duration-200`}
        }
      }
    }

    .external-links {
      ${tw`flex items-center space-x-5 mb-5 sm:mb-0`}

      a {
        ${tw`text-xs sm:text-sm hover:underline hover:text-black duration-200`}
      }
    }
  }
`

const license = (
  <OutboundLink href="https://github.com/alexperronnet/devfont/blob/master/license.md" onClick={() => logOutboundLink("License")}>
    MIT License
  </OutboundLink>
)

const externalLinks = [
  {
    href: "https://github.com/alexperronnet/devfont/releases",
    log: "Release",
    title: "Release notes"
  },
  {
    href: "https://www.figma.com/file/6UxYVimMRFLHuyPXBlxkkj/devfont-icons?node-id=4%3A154",
    log: "Figma",
    title: "Figma library"
  },
  {
    href: "https://github.com/alexperronnet/devfont.com",
    log: "Source",
    title: "View source"
  }
]

const date = new Date().getFullYear()

export default function Footer() {
  return (
    <StyledFooter>
      <div className="content">
        <div className="copyright">
          <OutboundLink 
            href="https://alexperronnet.io" 
            className="author" 
            onClick={() => logOutboundLink("author")}
          >
            @alexperronnet
          </OutboundLink>
          <small>
            Released under {license} &ndash; &copy; Copyright {date}
          </small>
        </div>
        <div className="external-links">
          {externalLinks.map(externalLink => (
            <OutboundLink
              key={externalLink.title}
              href={externalLink.href}
              onClick={() => logOutboundLink(externalLink.log)}
            >
              {externalLink.title}
            </OutboundLink>
          ))}
        </div>
      </div>
    </StyledFooter>
  )
}