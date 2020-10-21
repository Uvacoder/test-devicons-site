import React from 'react'
import download from 'downloadjs'
import JSZip from 'jszip'
import { icons } from 'devfont'
import { toast } from 'react-toastify'
import { Outbound, Icon } from '@components'
import { eventDownload, eventOutbound } from '@utils'

export default function Hero() {
  return (
    <section className='mt-16 mb-10 max-w-2xl'>
      <h2 className='text-2xl font-bold mb-10'>
        Open source icon set for designers &amp; developers
      </h2>
      <p className='text-justify mb-10'>
         Devfont is a premium, simply and beautiful set of {Object.keys(icons).length} open source icons for designers and developers. Each icon is designed on a 24x24 grid with an emphasis on readability, consistency, simplicity, flexibility and perfect pixels. Of course, all the icons are free for both personal and commercial use. {''}
         <Outbound
          href='https://alexperronnet.io'
          onClick={() => eventOutbound('alexperronnet.io')}
          className='hover:text-white hover:underline duration-200'
         >
           Made by @alexperronnet.
         </Outbound>
      </p>
      <div className='flex flex-row items-center space-x-5'>
        <Outbound
          href='https://github.com/devfont/devfont#readme'
          onClick={() => eventOutbound('get started')}
          className='px-5 py-3 text-xs sm:text-sm rounded-sm duration-200 bg-blue-600 text-white hover:bg-blue-800 flex flex-row items-center space-x-2'
        >
          <Icon name='github-alt' className='opacity-50' />
          <span>Get started</span>
        </Outbound>
        <button
          onClick={async () => {
            const zip = await generateZip()
            download(zip, 'devfont.zip')
            eventDownload('all')
            toast.dark('🦄 devfont.zip downloaded!')
          }}
          className='px-5 py-3 text-xs sm:text-sm rounded-sm duration-200 bg-gray-900 hover:bg-gray-700 focus:outline-none flex flex-row items-center space-x-2'
        >
          <Icon name='box' className='opacity-50' />
          <span>Download all</span>
        </button>
      </div>
    </section>
  )
}

function generateZip() {
  const zip = new JSZip()
  
  Object.values(icons).forEach(icon => zip.file(`${icon.name}.svg`, icon.toSvg()))

  return zip.generateAsync({ type: 'blob' })
}