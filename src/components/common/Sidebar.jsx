import React, { useEffect, useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider'
import { app } from '../../config/firebase.config';
import { getAuth } from 'firebase/auth';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import DraftsIcon from '@mui/icons-material/Drafts';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {motion} from 'framer-motion'


const Sidebar = () => {
  const navigate = useNavigate();
  const [{ user,collection }, dispatch] = useStateValue();
  const [isMenu,setIsMenu]= useState(false)
  console.log(collection)
  const Logout = () => {
    const firebaseAuth = getAuth(app)
    firebaseAuth.signOut().then(() => {
      window.localStorage.setItem("auth", "false");
    }).catch((e) => console.log(e));
    navigate("/login", { replace: true })
  }

  const addNewCollection=()=>{
    navigate("/newcollection")
  }


  return (
    <div className='w-1/6 min-h-full flex flex-col justify-between border border-y-0 p-2'>
      <div>
        <NavLink to={'/home'}>
          <button className='w-full border flex justify-start items-center p-2 gap-3'>
            <HomeIcon />
            Home</button>
        </NavLink>
        <NavLink to={'/drafts'}>
        <button className='w-full border flex justify-start items-center p-2 gap-3'>
          <DraftsIcon />
          Drafts</button>
        </NavLink>
      </div>
      <Divider textAlign="left">Collections</Divider>
        <div>
          <button className='w-full border flex justify-start items-center p-2 gap-3'
          onClick={addNewCollection}>
            <AddIcon />
            New Collection
          </button>
        </div>
        <div>
        <NavLink to={'/templates'}>
          <button className='w-full border flex justify-start items-center p-2 gap-3'>
            <AutoAwesomeMosaicIcon />
            Templates</button>
        </NavLink>
        <NavLink to={'/trash'}>
        <button className='w-full border flex justify-start items-center p-2 gap-3'>
          <DeleteIcon />
          Trash</button>
        </NavLink>
        <button className='w-full border flex justify-start items-center p-2 gap-3'
          onClick={addNewCollection}>
            <AddIcon />
            Invite people...
          </button>
      </div>
        <div 
        onClick={()=> setIsMenu(!isMenu)}
        className='flex items-center cursor-pointer gap-2 relative'>
            <img src={user?.user.imageURL} className='w-8 h-8 object-cover rounded-full shadow-lg' alt="" referrerPolicy='no-referrer' />
            <div className='flex justify-between w-full items-center'>
                <p className='text-lg'>{user?.user.name}</p>
                <MoreHorizIcon/>
            </div>
            {isMenu && (<motion.div 
            intital={{opacity : 0, y: 50}}
            animate = {{opacity : 1, y: -5}}
            exit = {{opacity : 0, y: 50}}
            className='absolute bottom-8 p-3 right-0 w-275 gap-2 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col '>
                <NavLink to={'/userProfile'}>
                    <p className='text-base text-black hover:font-semibold duration-150 transition-all ease-in-out '>Profile</p>
                </NavLink>
                    <Divider/>
                    <p className='text-base text-black hover:font-semibold duration-150 transition-all ease-in-out ' onClick={Logout}><LogoutIcon/>
                    Sign Out</p>
            </motion.div>)}
        </div>
    </div>

  )
}

export default Sidebar