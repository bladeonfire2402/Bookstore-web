


import React from 'react'
import Routers from '../../router/Routers'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '../Layout/Layout.css'

const   Layout = () => {
  return (
    <div className='row-please'>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout