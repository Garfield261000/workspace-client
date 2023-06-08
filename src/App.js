import React from 'react'
import { useState,useEffect } from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom'
import {Collection, Drafts, Home, Login, NewCollection} from './components'
import { UserProfile } from './components/user'
import { app } from './config/firebase.config'

import {AnimatePresence} from 'framer-motion'

import { getAuth } from 'firebase/auth'
import { validateUser } from './api'
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'

const App = () => {
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();

    const [{user}, dispatch] = useStateValue();


    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((userCred)=>{
            if(userCred){
                userCred.getIdToken().then((token)=>{
                    // console.log(token)
                    validateUser(token).then((data)=>{
                        dispatch({
                            type: actionType.SET_USER,
                            user: data
                        })
                    })
                })
            }else{
                setAuth(false);
                window.localStorage.setItem("auth","false");
                dispatch({
                    type : actionType.SET_USER,
                    user : null,
                })
                navigate("/login")
            }
        })
    },[])
    
  return (
    <AnimatePresence mode='wait'>
        <div className='min-w-[680px] bg-[white] flex justify-center items-center h-full '>
            <Routes>
                <Route path='/login' element={<Login setAuth={setAuth}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/drafts' element={<Drafts/>}/>
                <Route path='/userProfile' element={<UserProfile/>}/>
                <Route path='/collection' element={<Collection/>}/>
                <Route path='/newcollection' element={<NewCollection/>}/>
            </Routes>
        </div>
    </AnimatePresence>
  )
}

export default App