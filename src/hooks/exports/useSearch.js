import React from "react"
import Fuse from "fuse.js"

import { icons } from "@utils"

const fuse = new Fuse(Object.values(icons), {
  threshold: 0.2,
  keys: ["name", "tags"]
})

export const useSearch = query => {
  const [results, setResults] = React.useState(Object.values(icons))

  React.useEffect(() => {
    if (query.trim()) {
      setResults(fuse.search(query.trim()))
    } else {
      setResults(Object.values(icons))
    }
  }, [query])

  return results
}
