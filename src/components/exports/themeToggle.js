import React from "react"
import { toast } from "react-toastify"
import tw, { styled } from "twin.macro"

import { Icon } from "@components"
import { ThemeContext } from "@context"

export const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const isLight = () => {
    return theme === "light"
  }

  return (
    <Button
      onClick={() => {
        setTheme(isLight() ? "dark" : "light")
        toast.success(
          isLight() ? "🌑 Dark Mode Enabled" : "☀️ Light Mode Enabled"
        )
      }}
    >
      {isLight() ? <Icon name="sun-horizon" /> : <Icon name="cloudy-moon" />}
    </Button>
  )
}

const Button = styled.button`
  ${tw`focus:outline-none hover:text-secondary`}
`
