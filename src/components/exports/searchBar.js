import React from "react"
import tw, { styled } from "twin.macro"

import { Icon } from "@components"
import { useIsMobile } from "@hooks"
import { iconsCount } from "@utils"

export const SearchBar = ({ value, onChange, ...props }) => {
  const { isMobile } = useIsMobile()

  const inputElement = React.useRef(null)

  const handleKeyDown = event => {
    if (
      event.code === "Slash" &&
      inputElement.current !== document.activeElement
    ) {
      event.preventDefault()
      inputElement.current.focus()
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <StyledSearchBar {...props}>
      <Group className="group">
        <Label htmlFor="searchInput">
          <Icon name="search" />
        </Label>
        <Input
          id="searchInput"
          type="search"
          ref={inputElement}
          placeholder={
            isMobile
              ? `Search all ${iconsCount} icons`
              : `Search all ${iconsCount} icons (Press "/" to focus)`
          }
          value={value}
          onChange={onChange}
        />
      </Group>
    </StyledSearchBar>
  )
}

const StyledSearchBar = styled.div`
  ${tw`sticky z-10 top-20 sm:top-24`}
`

const Group = styled.div`
  ${tw`flex items-center bg-secondary h-14 sm:h-16 shadow-md focus-within:shadow-lg focus-within:text-secondary focus-within:ring-2 focus-within:ring-blue-01`}
`

const Label = styled.label`
  ${tw`flex items-center h-full px-5 group-hover:text-secondary cursor-pointer`}
`

const Input = styled.input`
  ${tw`w-full h-full pr-5 bg-transparent text-sm sm:text-base placeholder-primary focus:placeholder-tertiary`}

  &::-webkit-search-cancel-button {
    ${tw`cursor-pointer`}
  }
`
