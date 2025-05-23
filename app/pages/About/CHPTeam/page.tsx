import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { teamMembers } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <>
      <Mainnavbar />
      <div className="xl:container mx-auto md:max-w-4xl max-w-sm w-8/10 px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">CHP Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.imageSrc}
                alt={member.name}
                role={member.name}
                className="h-64 w-64 rounded-full object-cover object-top mx-auto"
              />
              <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label="Learn more" className="block mt-4 text-lg font-semibold text-[#5D1725] hover:underline">
                {member.name}
              </a>
              <p className="mt-2 text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page