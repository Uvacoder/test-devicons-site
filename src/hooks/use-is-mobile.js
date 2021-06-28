import React from "react"

export default function useIsMobile() {
  const [windowDimension, setWindowDimension] = React.useState(null)

  React.useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  React.useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowDimension < 640

  return { isMobile }
}