import React, { useState } from 'react'
import { icons } from 'devfont'
import { useSearch } from '@utils'
import { Wrapper, Hero, SearchBar, IconGrid, NoResults } from '@components'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const results = useSearch(query)

  return (
    <Wrapper pageTitle='Beautiful open source icon set'>
      <Hero />
      <SearchBar
        placeholder={`Search all ${Object.keys(icons).length} icons (Press "/" to focus)`}
        value={query}
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