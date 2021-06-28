import React from "react"
import { createGlobalStyle } from "styled-components"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-white text-gray-600`}
  }

  h1 {
    ${tw`font-bold text-black text-2xl sm:text-4xl`}
  }

  h2 {
    ${tw`font-bold w-max text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500`}
  }

  h3 {
    ${tw`font-bold text-black text-lg sm:text-xl`}
  }

  h4 {
    ${tw`text-black font-bold`}
  }

  ::selection {
    ${tw`bg-blue-100 text-blue-600`}
  }
`

export default function GlobalStyles() {
  return (
    <div>
      <BaseStyles />
      <CustomStyles />
    </div>
  )
}