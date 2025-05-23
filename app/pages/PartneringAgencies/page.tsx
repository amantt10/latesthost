import React from 'react'
import Mainnavbar from '@/components/Navbar'
import PartnerCard from '@/components/PartnerCard'
import Footer from '@/components/Footer'
import { partneringAgencies } from '@/constants'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className="xl:container mx-auto md:max-w-4xl max-w-sm w-8/10 relative">
        <h1 className="text-5xl font-extrabold text-left mb-10 text-gray-800">
          Partnering Agencies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {partneringAgencies.map((partners) => (
            <PartnerCard
              key={partners.id}
              imgAlt={partners.imgAlt}
              imgSrc={partners.imgSrc}
              linkHref={partners.linkHref}
              linkText={partners.linkText}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page