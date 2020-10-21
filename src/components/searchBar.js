import React, { useRef, useEffect } from 'react'

export default function SearchBar({ placeholder, value, onChange, ...props }) {
  const inputElement = useRef(null)

  function handleKeyDown(event) {
    if (event.key === '/' && inputElement.current !== document.activeElement) {
      event.preventDefault()
      inputElement.current.focus()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <form className='sticky top-0 bg-gray-800 pt-4'>
      <input
        id='searchInput'
        type='search'
        ref={inputElement}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full p-5 rounded-sm border-2 border-gray-900 font-mono text-sm bg-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-600 focus:border-blue-600 shadow-md'
      />
    </form>
  )
}