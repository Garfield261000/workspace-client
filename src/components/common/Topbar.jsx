import React from 'react'
import {Newdoc, Searchbar} from './'

const Topbar = () => {
  return (
    <div className='h-16 flex items-center justify-between p-3'>
      <Searchbar></Searchbar>
      <Newdoc></Newdoc>
    </div>
  )
}

export default Topbar