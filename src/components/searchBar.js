import React from 'react'
import { Icon } from '@components'

export default function SearchBar({ placeholder, value, onChange, ...props }) {
  const inputElement = React.useRef(null)

  function handleKeyDown(event) {
    if (event.key === '/' && inputElement.current !== document.activeElement) {
      event.preventDefault()
      inputElement.current.focus()
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <form className='relative'>
      <label
        htmlFor='searchInput'
        className='absolute top-0 bottom-0 pl-5 flex items-center text-gray-500'
      >
        <Icon name='search' />
      </label>
      <input
        id='searchInput'
        type='search'
        ref={inputElement}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full p-5 pl-16 rounded-sm bg-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline focus:placeholder-gray-600 shadow-md'
      />
    </form>
  )
}