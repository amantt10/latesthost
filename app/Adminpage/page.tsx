import Dashboard from '@/components/Dashboard'
import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <Dashboard />
      <Footer/>
    </>
  )
}

export default page