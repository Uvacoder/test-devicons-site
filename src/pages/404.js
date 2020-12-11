import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

import {
  Wrapper,
  ContainerSmall,
  IconBig,
  PageTitle,
  PageSubtitle,
  Text
} from "@components"

const NotFound = () => (
  <Wrapper title="Page not found">
    <ContainerSmall center="true">
      <IconBig name="ban" />
      <PageTitle red="true">Sorry, that doesn't exist!</PageTitle>
      <PageSubtitle>Oops, how'd you end up here?</PageSubtitle>
      <Text small="true" center="true">
        The Princess is in another castle... Click <Home /> for back to safety.
      </Text>
    </ContainerSmall>
  </Wrapper>
)

const Home = () => <StyledLink to="/">here</StyledLink>

const StyledLink = styled(Link)`
  ${tw`text-secondary hover:underline`}
`

export default NotFound
