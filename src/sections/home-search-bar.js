import React from "react"
import tw, { styled } from "twin.macro"

import { iconsLength } from "@utils"
import { useIsMobile } from "@hooks"
import { Icon } from "@components"

const StyledSearchBar = styled.div`
  ${tw`pt-5 sm:pt-0 pb-5 sticky top-20 sm:top-24 z-10 bg-white`}

  .caption {
    ${tw`py-5 text-xs text-gray-500`}

    span {
      ${tw`px-2 py-1 bg-gray-100 border-2 border-gray-200 rounded-md font-medium`}
    }
  }

  .input-search {
    ${tw`h-14 flex items-center bg-gray-100 border-2 border-gray-200 rounded-md text-gray-500 focus-within:text-blue-500 focus-within:border-blue-500 duration-200`}

    label {
      ${tw`h-full px-5 flex items-center cursor-pointer`}
    }

    input {
      ${tw`w-full h-full bg-transparent text-sm sm:text-base placeholder-gray-500 focus:placeholder-gray-300 focus:outline-none`}
      
      &::-webkit-search-cancel-button {
        ${tw`sm:appearance-none mr-5`}
      }
    }
    
    span {
      ${tw`mr-5 w-16 py-1 bg-gray-200 border-2 border-gray-300 rounded-md text-xs text-center font-medium text-gray-500`}
    }
  }
`

export default function SearchBar({ value, onChange, ...props }) {
  const { isMobile } = useIsMobile()
  const [focused, setFocused] = React.useState(false)

  const inputElementRef = React.useRef(null)

  const handleKeyDown = event => {
    if (
      (event.ctrlKey && event.code === "KeyK") &&
      inputElementRef.current !== document.activeElement
    ) {
      event.preventDefault()
      inputElementRef.current.focus()
      inputElementRef.current.select()
    }

    if (
      event.code === "Escape" &&
      inputElementRef.current === document.activeElement
    ) {
      event.preventDefault()
      inputElementRef.current.blur()
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <StyledSearchBar {...props}>
      {!isMobile && (
        <div className="caption">
          Simply click for download and press <span>Shift</span> for copy to clipboard.
        </div>
      )}
      <div className="input-search">
        <label htmlFor="search-input">
          <Icon name={focused ? "search" : "search-off"} />
        </label>
        <input
          id="search-input"
          type="search"
          ref={inputElementRef}
          placeholder={`Search all ${iconsLength} icons`}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {!isMobile && (
          <span>
            {focused ? "Esc" : "Ctrl K"}
          </span>
        )}
      </div>
    </StyledSearchBar>
  )
}