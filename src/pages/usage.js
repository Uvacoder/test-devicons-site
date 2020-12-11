import React from "react"
import tw, { styled } from "twin.macro"

import { eventOutbound, iconsCount } from "@utils"
import {
  Wrapper,
  ContainerSmall,
  PageTitle,
  PageSubtitle,
  Text,
  OutboundLink
} from "@components"

const Usage = () => (
  <Wrapper title="Get started">
    <ContainerSmall>
      <PageTitle>Usage</PageTitle>
      <Text small="true">
        Devfont is a open source icon set with {iconsCount} hand crafted icons.
        Devfont was made with love by <Author />. Please take a second to star
        this project on <Github />.
      </Text>
      <Pre>npm install devfont --save</Pre>
      <Pre>yarn add devfont</Pre>
      <PageSubtitle>Quick start</PageSubtitle>
      <Text small="true">
        Simply copy and paste the following code snippet into a blank html file
        to begin prototyping with Devfont.
      </Text>
      <Pre>{snippet}</Pre>
      <PageSubtitle>Contributing</PageSubtitle>
      <Text small="true">
        For more informations on how to contribute to Devfont project please see
        the <Contributing />.
      </Text>
      <PageSubtitle>License</PageSubtitle>
      <Text small="true">
        Devfont is licensed under the <License />. All the icons are free for
        both personal and commercial use.
      </Text>
    </ContainerSmall>
  </Wrapper>
)

const snippet = `<!DOCTYPE html>
<html lang="en">
  <script src="https://unpkg.com/devfont"></script>
  <body>

    <!-- example icon -->
    <i data-devfont="circle"></i>

    <script>
      devfont.replace()
    </script>
  </body>
</html>`

const Contributing = () => (
  <StyledLink
    href="https://github.com/alexperronnet/devfont/blob/master/contributing.md"
    onClick={() => eventOutbound("Contribution Guidelines")}
  >
    contribution guidelines
  </StyledLink>
)

const License = () => (
  <StyledLink
    href="https://github.com/alexperronnet/devfont/blob/master/license.md"
    onClick={() => eventOutbound("GitHub License")}
  >
    MIT License
  </StyledLink>
)

const Author = () => (
  <StyledLink
    href="https://alexperronnet.io"
    onClick={() => eventOutbound("Author Website")}
  >
    @alexperronnet
  </StyledLink>
)

const Github = () => (
  <StyledLink
    href="https://github.com/alexperronnet/devfont"
    onClick={() => eventOutbound("GitHub Homepage")}
  >
    GitHub
  </StyledLink>
)

const Pre = styled.pre`
  ${tw`p-5 overflow-auto bg-secondary text-xs sm:text-sm select-all rounded-sm`}
`

const StyledLink = styled(OutboundLink)`
  ${tw`text-secondary hover:underline`}
`

export default Usage
