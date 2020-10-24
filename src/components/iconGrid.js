import React from 'react'
import download from 'downloadjs'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'
import { Icon } from '@components'
import { eventCopy, eventDownload } from '@utils'


export default function IconGrid({ icons }) {
  return (
    <div
      className='grid gap-5 my-5'
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))'}}
    >
      {icons.map((icon) => {
        return (
          <article
            key={icon.name}
            className='bg-gray-900 rounded-sm shadow relative'
          >
            <div className='absolute flex flex-row space-x-3 right-0 pt-2 pr-3'>
              {icon.tags.includes('new-item') && (
                <div className='flex'>
                  <span className='h-2 w-2 rounded-full bg-blue-600 animate-ping' />
                  <span className='h-2 w-2 rounded-full bg-blue-600 absolute' />
                </div>
              )}
              {icon.tags.includes('official-brand') && (
                <div className='flex'>
                  <span className='h-2 w-2 rounded-full bg-yellow-600 animate-ping' />
                  <span className='h-2 w-2 rounded-full bg-yellow-600 absolute' />
                </div>
              )}
            </div>
            <div className='flex flex-col items-center'>
              <Icon name={icon.name} className='my-10' />
              <h3 className='text-xs mb-5'>
                {icon.name}
              </h3>
            </div>
            <div className='flex flex-col space-y-2 mb-2'>
              <button
                onClick={async () => {
                  copy(icon.toSvg())
                  eventCopy(icon.name)
                  toast.dark(`🦄 ${icon.name} copied as SVG!`)
                }}
                className='bg-gray-800 text-white text-xs py-2 mx-2 rounded-sm focus:outline-none hover:bg-blue-600'
              >
                Copy
              </button>
              <button
                onClick={async () => {
                  download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml')
                  eventDownload(icon.name)
                  toast.dark(`🦄 ${icon.name}.svg downloaded!`)
                }}
                className='bg-gray-800 text-white text-xs py-2 mx-2 rounded-sm focus:outline-none hover:bg-blue-600'
              >
                Download
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}