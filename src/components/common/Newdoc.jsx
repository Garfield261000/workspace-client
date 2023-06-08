import React from 'react'
import AddIcon from '@mui/icons-material/Add';


const Newdoc = () => {
  return (
    <div>
        <button className='flex bg-[#2c97d0] text-white border p-2 rounded-md'>
            <AddIcon/>
            <p>New doc</p>
        </button>
    </div>
  )
}

export default Newdoc