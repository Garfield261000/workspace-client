import React from 'react'
import { useNavigate } from 'react-router-dom';
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

const Sidebar = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  const Logout = () => {
    const firebaseAuth = getAuth(app)
    firebaseAuth.signOut().then(() => {
      window.localStorage.setItem("auth", "false");
    }).catch((e) => console.log(e));
    navigate("/login", { replace: true })
  }

  const navigateHome = () => {
    navigate("/home")
  }

  const navigateSearch = () => {
    navigate("/search")
  }

  const navigateDrafts = () => {
    navigate("/drafts")
  }

  return (
    <div className='w-1/6 min-h-full flex flex-col border border-y-0 '>
      <div>
        <button className='w-full border flex justify-center items-center p-2 gap-3'
          onClick={navigateHome}>
          <HomeIcon />
          Home</button>
        <button className='w-full border flex justify-center items-center p-2 gap-3'
          onClick={navigateSearch}>
          <SearchIcon />
          Search
        </button>
        <button className='w-full border flex justify-center items-center p-2 gap-3'
          onClick={navigateDrafts}>
          <DraftsIcon />
          Drafts</button>
      </div>
      <Divider textAlign="left">Collections</Divider>
        <div>
          <button className='w-full border flex justify-center items-center p-2 gap-3'
            onClick={navigateHome}>
            <LibraryBooksIcon />
            Welcome</button>
          <button className='w-full border flex justify-center items-center p-2 gap-3'
            onClick={navigateSearch}>
            <AddIcon />
            New Collection
          </button>
        </div>
        <button onClick={Logout} className='w-full border flex justify-center items-center p-2 gap-3'>
        <LogoutIcon />
        Logout</button>
    </div>

  )
}

export default Sidebar