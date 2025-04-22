import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'

const Layout = () => {
  useEffect(()=>{
  },[])
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