import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'
import { useLoginStatus } from '../contexts/LoginStatusContext';
import Cookies from 'js-cookie'
import { useUserDetails } from '../contexts/UserDetailContext';

const Layout = () => {
  const [isLogin, setIsLogin] = useState(false);
const {setLoginStatus} = useLoginStatus()
const {setUserDetails} = useUserDetails()
useEffect(()=>{
  const userLogin = Cookies.get('accessToken');
  const userDetails = Cookies.get('userDetails');
  if(userLogin && userDetails){
    setIsLogin(true)
    setLoginStatus(true);
    setUserDetails(JSON.parse(userDetails))
  }
},[isLogin])
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div >
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout