import React from "react"
import tw, { styled } from "twin.macro"

import { Icon } from "@components"

export const IconCard = ({ name, onClickCopy, onClickDownload, ...props }) => (
  <StyledIconCard className="group" {...props}>
    <IconTitle>
      <Icon name={name} />
      <Title>{name}</Title>
    </IconTitle>
    <Buttons>
      <Button onClick={onClickCopy}>Copy</Button>
      <Button onClick={onClickDownload}>Download</Button>
    </Buttons>
  </StyledIconCard>
)

const StyledIconCard = styled.div`
  ${tw`w-full h-full p-3 flex flex-col bg-secondary`}
`

const IconTitle = styled.div`
  ${tw`h-3/5 flex flex-col items-center justify-center space-y-10 group-hover:text-secondary`}
`

const Title = styled.span`
  ${tw`text-xs select-all text-center`}
`

const Buttons = styled.div`
  ${tw`h-2/5 flex flex-col justify-end space-y-3`}
`

const Button = styled.button`
  ${tw`bg-primary text-secondary text-xs py-2 rounded-sm focus:outline-none hover:bg-blue-01 active:bg-blue-02 hover:text-white`}
`
