import React from 'react'
import download from 'downloadjs'
import copy from 'copy-to-clipboard'
import { toast } from 'react-toastify'
import { Icon } from '@components'
import { eventCopy, eventDownload } from '@utils'


export default function IconGrid({ icons }) {
  return (
    <ul
      className='grid gap-5 my-5'
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))'}}
    >
      {icons.map((icon) => {
        return (
          <li
            key={icon.name}
            className='bg-gray-900 rounded-sm shadow'
          >
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
          </li>
        )
      })}
    </ul>
  )
}