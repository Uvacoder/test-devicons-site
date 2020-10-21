import React from 'react'
import { icons } from 'devfont'
import { useSearch } from '@utils'
import { Wrapper, Hero, SearchBar, IconGrid, NoResults } from '@components'

export default function HomePage() {
  const [query, setQuery] = React.useState('')
  const results = useSearch(query)

  return (
    <Wrapper pageTitle='Beautiful open source icon set'>
      <Hero />
      <div className='sticky top-0 pt-5 z-50 bg-gray-800'>
        <SearchBar
          placeholder={`Search all ${Object.keys(icons).length} icons (Press "/" to focus)`}
          value={query || ''}
          onChange={event => setQuery(event.target.value)}
        />
      </div>
      {results.length > 0 ? (
        <IconGrid icons={results} />
      ) : (
        <NoResults query={query} />
      )}
    </Wrapper>
  )
}