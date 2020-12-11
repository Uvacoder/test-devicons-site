import React from "react"

export const useInactiveTab = () => {
  React.useEffect(() => {
    const pageTitle = document.title

    const inactiveMessage = "😔 Come Back..."

    document.addEventListener("visibilitychange", function (e) {
      const isPageActive = !document.hidden

      if (!isPageActive) {
        document.title = inactiveMessage
      } else {
        document.title = pageTitle
      }
    })
  })
}
