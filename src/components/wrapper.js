import React from 'react'
import { Head, Notice, Header, Footer } from '@components'
import { ToastContainer } from 'react-toastify'

export default function Wrapper({ pageTitle, children }) {
  return (
    <div className='wrapper'>
      <Head pageTitle={pageTitle} />
      <Notice />
      <div className='container'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </div>
  )
}