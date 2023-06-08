import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createCollection,getAllCollection } from '../api'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'


const NewCollection = () => {

  const [access, setAccess] = useState('View and Edit')
  const [name, setName] = useState('')
  const [{user},dispatch] = useStateValue();
  const navigate = useNavigate();


  const accessOptions = ['View and Edit', 'View only', 'No access']

  const params = {
    name: name,
    access: access
  }
  const createNewCollection = async () => {
    if (name !== '') {
      await createCollection(params).then((res) => {
        getAllCollection().then((collection)=>{
          dispatch({type:actionType.SET_ALL_COLLECTION,
          allCollection: collection.data})
        })
      })
      navigate('/home')
    }
    else (
      console.warn('name empty')

    )
  }


  return (
    <div className='w-full h-full flex flex-col p-4 gap-6'>
      <div className='w-full'>
        <NavLink to={'/home'}>
          <button>Go back</button>
        </NavLink>
      </div>
      <div className='h-full w-full flex justify-center'>
        <div className='w-1/2'>
          <p className='text-3xl mb-4'>Create a collection</p>
          <p className='mb-4'>Collections are for grouping your documents.They work best when organized around a topic or internal team - Product or Engineering for example</p>
          <div className='flex flex-col gap-2'>
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
                console.log(e.target.value)
              }}
              className='border-2 rounded-md p-2' />
          </div>
          <div className='flex flex-col gap-2 relative'>
            <p>Access</p>
            <select
              className='p-3 bg-white border rounded-md'
              onChange={e => {
                setAccess(e.target.value);
                console.log(e.target.value)
              }}
            >
              {accessOptions.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <p className='my-4'>This is the default level of access, you can give individual user or groups more access once the collection is created</p>
          <button onClick={createNewCollection} className='bg-[#277ec0] text-white p-2 rounded-md'>Create</button>
        </div>
      </div>
    </div>
  )
}

export default NewCollection
