import React from "react"
import tw, { styled } from "twin.macro"

import { eventOutbound } from "@utils"
import {
  ContainerSmall,
  OutboundLink,
  IconBig,
  Text,
  PageSubtitle
} from "@components"

export const NoResults = ({ query }) => (
  <ContainerSmall center="true">
    <IconBig name="search-off" />
    <PageSubtitle>
      No results found for <Query>{query}</Query>
    </PageSubtitle>
    <Text small="true" center="true">
      If you have a request for an icon you can <Request query={query} />.
    </Text>
  </ContainerSmall>
)

const Request = ({ query }) => (
  <StyledLink
    href={`https://github.com/alexperronnet/devfont/issues/new?template=icon_request.md&title=${query}+icon`}
    onClick={() => eventOutbound("GitHub Request")}
  >
    open a new GitHub issue
  </StyledLink>
)

const StyledLink = styled(OutboundLink)`
  ${tw`text-blue-01 hover:text-blue-02 hover:underline`}
`

const Query = styled.span`
  ${tw`text-red-01 break-all`}
`
