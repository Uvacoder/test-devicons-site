import React from "react"
import tw, { styled } from "twin.macro"

import { Icon } from "@components"

export const Button = props => (
  <StyledButton {...props}>
    <Icon name={props.icon} />
    <span>{props.value}</span>
  </StyledButton>
)

const StyledButton = styled.a`
  ${tw`px-5 py-3 flex space-x-3 items-center text-sm rounded-sm focus:outline-none`}

  ${props => props.red && tw`bg-red-01 hover:bg-red-02 text-white`}
  ${props => props.blue && tw`bg-blue-01 hover:bg-blue-02 text-white`}
  ${props => props.secondary && tw`bg-secondary hover:text-secondary`}

  svg {
    ${tw`opacity-60`}
  }
`
