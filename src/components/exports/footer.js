import React from "react"
import tw, { styled } from "twin.macro"

import { eventOutbound } from "@utils"
import { OutboundLink } from "@components"

export const Footer = () => (
  <StyledFooter>
    <StyledLink
      href="https://alexperronnet.io"
      onClick={() => eventOutbound("Author Website")}
    >
      Made by @alexperronnet
    </StyledLink>
    <StyledLink
      href="https://github.com/alexperronnet/devfont/releases"
      onClick={() => eventOutbound("Release Notes")}
    >
      Release Notes
    </StyledLink>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  ${tw`h-20 sm:h-24 flex items-center justify-between border-t-2 border-secondary`}
`

const StyledLink = styled(OutboundLink)`
  ${tw`text-xs sm:text-sm hover:underline hover:text-secondary`}
`
