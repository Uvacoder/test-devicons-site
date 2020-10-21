import React from 'react'

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
    <div className='sticky top-0 bg-gray-800 pt-4 max-w-full flex shadow-md'>
      <input
        id='searchInput'
        type='search'
        ref={inputElement}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='flex-auto p-5 text-sm font-mono rounded bg-gray-900 placeholder-gray-500 focus:outline-none focus:shadow-outline focus:placeholder-gray-600'
      />
    </div>
  )
}