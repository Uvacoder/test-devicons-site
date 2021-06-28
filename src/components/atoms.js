import React from "react"
import tw, { styled } from "twin.macro"
import { ToastContainer as Toast } from "react-toastify"

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
  ${props => props.size === "default" && tw`container`}
  ${props => props.size === "small" && tw`mx-auto max-w-2xl`}
`

export const Button = ({ icon, children, ...props }) => {
  const StyledButton = styled(OutboundLink)`
    ${tw`w-max px-4 py-2 flex items-center space-x-3 rounded-md text-sm font-medium focus:outline-none hocus:ring duration-200`}
    ${props => props.color === "gray" && tw`bg-gray-100 text-gray-500 hocus:bg-gray-200 hocus:text-gray-600 ring-gray-300`}
    ${props => props.color === "blue" && tw`bg-blue-500 text-white hocus:bg-blue-600 ring-blue-300`}
    ${props => props.color === "yellow" && tw`bg-yellow-500 text-white hocus:ring-0 cursor-not-allowed`}
    ${props => props.color === "green" && tw`bg-green-500 text-white hocus:ring-0 cursor-not-allowed`}
    ${props => props.color === "red" && tw`bg-red-500 text-white hocus:bg-red-600 ring-red-300`}

    svg {
      ${tw`opacity-75`}
    }
  `

  return (
    <StyledButton {...props}>
      <Icon name={icon} />
      <span>
        {children}
      </span>
    </StyledButton>
  )
}

export const ToastContainer = () => {
  const StyledToastContainer = styled(Toast)`
    .Toastify__toast--success {
      ${tw`bg-green-500 text-white text-xs sm:text-sm rounded-md`}

      button[aria-label="close"] {
        ${tw`text-green-200 focus:outline-none`}
      }
      
      .Toastify__progress-bar--success {
        ${tw`bg-green-200`}
      }
    }
  `

  return (
    <StyledToastContainer
      position="top-right"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
  )
}

export const Code = ({ language, snippet }) => {
  const StyledPre = styled.pre`
    ${tw`p-5 overflow-auto rounded-md bg-black`}

    button {
      ${tw`m-5`}
    }

    code {
      ${tw`text-white text-sm font-mono`}

      .punctuation,
      .doctype-tag,
      .name,
      .comment {
        ${tw`text-gray-400`}
      }

      .tag,
      .number,
      .property {
        ${tw`text-green-400`}
      }

      .attr-name,
      .string,
      .selector {
        ${tw`text-blue-400`}
      }

      .attr-value {
        ${tw`text-pink-400`}
      }

      .function {
        ${tw`text-yellow-400`}
      }

      .keyword {
        ${tw`text-red-400`}
      }
    }
  `

  return (
    <StyledPre>
      <code className={`language-${language}`}>
        {snippet}
      </code>
    </StyledPre>
  )
}

export const Logo = ({ name, ...props }) => {
  if (name === "figma") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" {...props}>
        <path
          fill="#0acf83"
          d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
        />
        <path
          fill="#a259ff"
          d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
        />
        <path
          fill="#f24e1e"
          d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
        />
        <path
          fill="#ff7262"
          d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
        />
        <path
          fill="#1abcfe"
          d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
        />
      </svg>
    )
  }

  if (name === "adobe-xd") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 234" {...props}>
        <path
          fill="#470137"
          d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
        />
        <path
          fill="#ff61f6"
          d="M126.2 61.5l-30 49.5 32 52.5c.2.4.3.8.2 1.2-.1.4-.5.1-1.1.2h-22.9c-1.6 0-2.7-.1-3.4-1.1-2.1-4.2-4.3-8.3-6.4-12.5-2.1-4.1-4.4-8.3-6.8-12.6-2.4-4.3-4.8-8.6-7.2-13h-.2c-2.1 4.3-4.4 8.6-6.7 12.9-2.3 4.3-4.6 8.6-6.8 12.8-2.3 4.2-4.6 8.5-6.9 12.6-.4 1-1.2 1.1-2.3 1.1h-22c-.4 0-.7.2-.7-.3-.1-.4 0-.8.2-1.1l31.1-51L36 61.4c-.3-.4-.4-.8-.2-1 .2-.3.6-.4 1-.4h22.7c.5 0 1 .1 1.4.2.4.2.7.5 1 .9 1.9 4.3 4.1 8.6 6.4 12.9 2.4 4.3 4.7 8.5 7.2 12.7 2.4 4.2 4.6 8.4 6.7 12.7h.2c2.1-4.4 4.3-8.7 6.5-12.9 2.2-4.2 4.5-8.4 6.8-12.6 2.3-4.2 4.5-8.5 6.7-12.6.1-.4.3-.8.6-1 .4-.2.8-.3 1.3-.2h21.1c.5-.1 1 .2 1.1.7.1.1-.1.5-.3.7zM172.4 167c-7.4.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8.5 0 1.2 0 2.1.1.9.1 1.9.1 3.1.2V52.4c0-.7.3-1.1 1-1.1h20.3c.5-.1.9.3 1 .7v95.4c0 1.8.1 3.8.2 6 .2 2.1.3 4.1.4 5.8 0 .7-.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5.1.9-10.2 1.4-15.4 1.4zm9.8-20v-44c-.9-.2-1.8-.4-2.7-.5-1.1-.1-2.2-.2-3.3-.2-3.9 0-7.8.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-.1 3.5.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7.9 5.5 1.3 8.3 1.3 1.5 0 2.9-.1 4.2-.2 1.3.1 2.4-.1 3.6-.5z"
        />
      </svg>
    )
  }

  if (name === "sketch") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 356" {...props}>
        <path
          fill="#FDB300"
          d="M85.79 11.715L196.603 0l110.812 11.715 85.79 115.166-196.602 228.942L0 126.881z"
        />
        <path
          fill="#EA6C00"
          d="M79.634 126.881l116.969 228.942L0 126.881z"
        />
        <path
          fill="#EA6C00"
          d="M313.571 126.881L196.602 355.823l196.603-228.942z"
        />
        <path
          fill="#FDAD00"
          d="M79.634 126.881h233.938L196.603 355.823z"
        />
        <path
          fill="#FDD231"
          d="M196.603 0L85.79 11.715l-6.156 115.166z"
        />
        <path
          fill="#FDD231"
          d="M196.602 0l110.813 11.715 6.156 115.166z"
        />
        <path
          fill="#FDAD00"
          d="M393.206 126.881L307.415 11.715l6.157 115.166zM0 126.881L85.79 11.715l-6.156 115.166z"
        />
        <path
          fill="#FEEEB7"
          d="M196.603 0L79.634 126.881h233.938z"
        />
      </svg>
    )
  }
}