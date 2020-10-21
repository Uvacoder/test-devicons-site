import React from 'react'
import { Link } from 'gatsby'
import { version } from 'devfont/package.json'
import { Outbound, Icon } from '@components'
import { eventOutbound } from '@utils'

export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center py-6 border-b-2 border-gray-900 border-opacity-50'>
      <div className='flex flex-row items-center space-x-5'>
        <h1 className='font-bold text-xl hover:underline'>
          <Link to='/'>
            Devfont
          </Link>
        </h1>
        <Outbound
          onClick={() => eventOutbound('release')}
          href='https://github.com/devfont/devfont/releases'
          className='bg-gray-900 font-bold px-2 py-1 rounded-sm text-xs hover:underline'
        >
          {version}
        </Outbound>
      </div>
      <div className='flex flex-row items-center space-x-5'>
        <Outbound
          href='https://paypal.com/paypalme/alexperronnet/5'
          onClick={() => eventOutbound('donate')}
          className='px-3 py-2 rounded-sm text-white duration-200 text-sm flex flex-row items-center space-x-2 bg-green-600 hover:bg-green-800'
        >
          <Icon name='heart' className='opacity-50' />
          <span className='sr-only sm:not-sr-only'>
            Donate
          </span>
        </Outbound>
        <Outbound
          href='https://github.com/devfont/devfont/issues'
          onClick={() => eventOutbound('request')}
          className='px-3 py-2 rounded-sm text-white duration-200 text-sm flex flex-row items-center space-x-2 bg-red-600 hover:bg-red-800'
        >
          <Icon name='lifebuoy' className='opacity-50' />
          <span className='sr-only sm:not-sr-only'>
            Request
          </span>
        </Outbound>
      </div>
    </header>
  )
}