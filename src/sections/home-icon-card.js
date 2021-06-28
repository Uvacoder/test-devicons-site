import React from "react"
import tw, { styled } from "twin.macro"

import { Icon } from "@components"

const StyledIconCard = styled.button`
  ${tw`w-full h-full flex flex-col space-y-5 items-center justify-center bg-gray-100 border-2 border-gray-200 rounded-md hocus:border-blue-500 focus:outline-none`}

  svg {
    ${tw`text-gray-500`}
  }

  span {
    ${tw`w-14 truncate overflow-ellipsis text-xs text-gray-400`}
  }
`

export default function IconCard({ name, onClick, ...props }) {
  return (
    <StyledIconCard
      role="button"
      tabIndex={0}
      onClick={onClick}
      {...props}
    >
      <Icon name={name} />
      <span>
        {name}
      </span>
    </StyledIconCard>
  )
}
