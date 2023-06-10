import React, { useEffect } from 'react'
import { useStateValue } from '../context/StateProvider';
import { getAllCollection } from '../api';
import { actionType } from '../context/reducer';
import { Sidebar, Topbar } from './common';

const Collection = () => {
  const [{user,doc}, dispatch] = useStateValue();
  const [inputList, setInputList] = useStateValue([
    {name:doc.name,content:doc.content}
  ]);
  console.log(inputList.doc)

  const data = {
    user_id:user?.user.user_id,
  }
  useEffect(() => {
    if(user){
      getAllCollection(data.user_id).then((data) => {
        dispatch({
          type: actionType.SET_ALL_COLLECTION,
          allCollection: data.data
        })
      })  
    }
  },[user])
  
  useEffect(()=>{
    if(doc){
      setInputList([{name:doc.name,content:doc.content}])
    }
  },[doc])

  const handleInputChange=(e)=>{
    const { name, content } = e.target;
    // const list = [...inputList];
    // console.log(list)
  }

  
  return (
    <div className='w-full min-h-screen flex'>
      <Sidebar/>
      <div className='w-5/6 h-100vh flex flex-col'>
        <Topbar/>
        <div className='w-full h-full p-4 flex justify-center'>
          <div className='w-3/4 flex flex-col'>
            <textarea className='text-3xl w-1/2' 
            DefaultValue={inputList.doc.name} 
            onChange={handleInputChange}
            ></textarea>
            {/* <textarea className='text h-full' 
            value={inputList.content}
            onChange={handleInputChange}
            ></textarea> */}
          </div>
        </div>
      </div>
    </div>
  )
}



export default Collection