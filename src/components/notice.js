import React from 'react'
import { Link } from 'gatsby'
import { Outbound } from '@components'

export default function Notice() {
  return (
    <aside className='bg-gray-900 py-4 text-xs text-center'>
      <p className='container'>
        Black Lives Matter. Support the {''}
        <Outbound href='https://eji.org/' className='text-white hover:underline'>
          Equal Justice Initiative
        </Outbound>
        {''} and read my {''}
        <Link to ='/statement' className='text-white hover:underline'>
          statement here.
        </Link>
      </p>
    </aside>
  )
}