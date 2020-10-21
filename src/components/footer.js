import React from 'react'
import { Outbound } from '@components'
import { eventOutbound } from '@utils'

export default function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 py-6 border-t-2 border-gray-100 text-sm'>
      <Outbound
        href='https://alexperronnet.io/'
        onClick={() => eventOutbound('alexperronnet.io')}
        className='hover:underline hover:text-white duration-200'
      >
        made by @alexperronnet
      </Outbound>
      <Outbound
        href='https://github.com/devfont/devfont/releases'
        onClick={() => eventOutbound('release')}
        className='hover:underline hover:text-white duration-200'
      >
        Release under MIT License
      </Outbound>
    </footer>
  )
}