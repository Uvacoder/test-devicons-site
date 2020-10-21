import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '@components'

export default function NotFoundPage() {
  return (
    <Wrapper pageTitle='Page Not Found'>
      <section className="my-16 max-w-2xl">
        <h2 className="text-5xl text-red-600 font-bold mb-10">
          Error #404
        </h2>
        <h3 className="text-xl font-bold mb-3">
          The page cannot be found
        </h3>
        <p>
          You just hit a route that doesn't exist... the sadness. If you think something has gone wrong, feel free to drop me an email at {""}
          <a href="mailto:alex@alexperronnet.io" className='text-blue-600 hover:underline'>
            alex@alexperronnet.io
          </a>
          {""} or {""}
          <Link to="/" className='text-blue-600 hover:underline'>
            click this to go back home.
          </Link>
        </p>
      </section>
    </Wrapper>
  )
}