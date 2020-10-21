import React from 'react'
import { Outbound } from '@components'
import { eventOutbound } from '@utils'

export default function NoResults({ query }) {
  return (
    <div className='my-20 text-center'>
      <h3 className='text-xl font-bold mb-5 break-words'>
        There are no results found for {""}
        <span className='text-red-600'>
          {query}
        </span>
      </h3>
      <p>
        If you have a request for an icon you can {""}
        <Outbound
          href={`https://github.com/devfont/devfont/issues/new?template=icon_request.md&title=${query}+icon`}
          onClick={() => eventOutbound('request')}
          className='text-blue-600 hover:underline'
        >
          open a new GitHub issue.
        </Outbound>
      </p>
    </div>
  )
}