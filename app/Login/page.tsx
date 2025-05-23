import Footer from '@/components/Footer'
import { Login } from '@/components/Login'
import Mainnavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
        <Mainnavbar/>
        <Login />
        <Footer />
    </>
  )
}

export default page