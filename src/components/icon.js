import React from 'react'
import { icons } from 'devfont'

export default function Icon({ name, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
      {...props}
    />
  )
}