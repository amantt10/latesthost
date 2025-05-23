import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { LinkPreview } from '@/components/ui/link-preview'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className='container mx-auto mt-20'>
        <h1 className='text-4xl font-semibold'>Thank you for taking our referral survey.</h1><br/>
          <h3 className='text-lg'>The Mississippi Department of Rehabilitation Services (MDRS) may be a helpful resource for you. Learn more by visiting their website at 
            {" "}
            <LinkPreview url="https://www.mdrs.ms.gov/" className="font-bold">MDRS</LinkPreview> {" "}
             or contacting them at 800-443-1000. </h3>
          <img src="/logoweb.svg" role='none' alt="MDRS Logo" />
      </div>
      <Footer />
    </>
  )
}

export default page