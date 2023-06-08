import React from 'react'
import { Sidebar, Topbar } from './common'


const Drafts = () => {
  return (
    <div className='w-full min-h-screen flex'>
      <Sidebar />
      <div className='w-5/6 h-100vh flex flex-col'>
        <Topbar />
        <div className='w-full h-full p-4'>
          <div>
            Drafts
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drafts