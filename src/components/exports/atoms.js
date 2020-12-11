import React from "react"
import tw, { styled } from "twin.macro"

import { icons } from "@utils"

export const Icon = ({ name, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    dangerouslySetInnerHTML={{ __html: icons[name].contents }}
    {...props}
  />
)

export const OutboundLink = props => (
  //eslint-disable-next-line
  <a target="_blank" rel="noopener noreferrer" {...props} />
)

export const Container = styled.div`
  ${tw`container`}
`

export const ContainerSmall = styled.div`
  ${tw`flex flex-col max-w-2xl mx-auto my-14 sm:my-20 space-y-8 sm:space-y-10`}
  ${props => props.center && tw`items-center text-center`}
`

export const PageTitle = styled.h1`
  ${tw`font-bold text-secondary text-3xl sm:text-4xl`}
  ${props => props.small && tw`text-xl sm:text-2xl`}
  ${props => props.red && tw`text-red-01`}
`

export const PageSubtitle = styled.h2`
  ${tw`font-bold text-secondary text-xl sm:text-2xl`}
`

export const Text = styled.p`
  ${tw`text-justify`}
  ${props => props.center && tw`text-center`}
  ${props => props.small && tw`text-sm sm:text-base`}
  ${props => props.big && tw`sm:text-lg`}
`

export const IconBig = styled(Icon)`
  ${tw`h-16 w-16 sm:h-24 sm:w-24 text-tertiary`}
`
