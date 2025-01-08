import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'

const Layout = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='h-[calc(100vh-74px)]'>
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout