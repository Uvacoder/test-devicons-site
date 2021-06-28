import React from "react"
import tw, { styled } from "twin.macro"

import { OutboundLink } from "@components"

const StyledNoResults = styled.section`
  ${tw`py-20 mx-auto max-w-2xl flex flex-col space-y-8 items-center`}

  svg {
    ${tw`h-16 w-16 sm:h-20 sm:w-20 text-gray-300`}
  }

  h2 {
    ${tw`w-full text-center`}
  }

  p {
    ${tw`text-center`}

    a {
      ${tw`text-blue-500 hover:underline`}
    }
  }
`

export default function HomeNoResults({ query }) {
  return (
    <StyledNoResults>
      <h2>
        Sorry! There are no icons for "{query}"
      </h2>
      <p>
        If you have a request for an icon you can {""}
        <OutboundLink href={`https://github.com/alexperronnet/devfont/issues/new?template=icon_request.md&title=${query}+icon`}>
          open a new GitHub issue
        </OutboundLink>.
      </p>
    </StyledNoResults>
  )
}