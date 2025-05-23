import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
        <Mainnavbar />
            <div className="container mx-auto mt-20">
                <h1 className="text-4xl font-bold mb-10">Evaluation</h1>
            </div>
        <Footer />
    </>
  )
}

export default page