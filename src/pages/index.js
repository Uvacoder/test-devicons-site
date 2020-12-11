import React from "react"

import { useSearch } from "@hooks"
import { Wrapper, Hero, SearchBar, IconGrid, NoResults } from "@components"

const Home = () => {
  const [query, setQuery] = React.useState("")

  const results = useSearch(query)

  return (
    <Wrapper title="Beautiful open source icons">
      <Hero />
      <SearchBar
        value={query || ""}
        onChange={event => setQuery(event.target.value)}
      />
      {results.length > 0 ? (
        <IconGrid icons={results} />
      ) : (
        <NoResults query={query} />
      )}
    </Wrapper>
  )
}

export default Home
