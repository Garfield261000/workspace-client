import React from 'react'
import {Sidebar,Topbar} from './common'

const Home = ({children}) => {
  return (
      <div className='w-full min-h-screen flex'>
        <Sidebar/>
        <div className='w-5/6 h-100vh flex flex-col'>
            <Topbar/>
          <div className='w-full h-full'>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home