import React from "react"

import { useSearch } from "@hooks"
import { Layout, ToastContainer } from "@components"
import { Hero, SearchBar, IconGrid, NoResults } from "@sections"

export default function Home() {
  
  const [query, setQuery] = React.useState("")

  const results = useSearch(query)

  return (
    <Layout title="Premium icon pack">
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
      <ToastContainer />
    </Layout>
  )
}