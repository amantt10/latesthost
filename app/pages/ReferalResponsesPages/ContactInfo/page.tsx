import { ContactForm } from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
        <ContactForm />
      <Footer />
    </>
  )
}

export default page