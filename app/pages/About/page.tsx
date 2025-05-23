import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className="xl:container mx-auto md:max-w-6xl w-8/10 relative">
        <h1 className='text-5xl font-extrabold text-left text-gray-800'>About Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            <br />
            <p className='max-w-4xl text-gray-700 leading-relaxed'>
              <span className='font-semibold'>The Career Horizons Project</span>, funded by the U.S. Department of Education Rehabilitation Services Administration (RSA), improves <span className='font-semibold'>Competitive Integrated Employment (CIE)</span> services for Mississippi residents between the ages of 16 and 70 who have a disability accompanied by or resulting from Long COVID syndrome. <br /><br />

              <span className='font-semibold'>Mississippi State University</span> was one of 27 grantees across the nation chosen out of more than 200 applicants to receive the award from the Disability Innovation Fund program. This five-year grant project will run from <span className='font-semibold'>October 1, 2024</span>, to <span className='font-semibold'>September 30, 2029</span>.
            </p>
            <h3 className='text-3xl font-bold text-gray-800 mt-8'>Project Goals</h3>
            <ul className='list-disc ml-8 max-w-4xl space-y-4 text-gray-700 leading-relaxed'>
              <li>
                <span className='font-semibold'>Targeted Outreach:</span> Identify and enroll Mississippians aged 16–70 with disabilities resulting from Long COVID since 2020. 
              </li>
              <li>
                <span className='font-semibold'>Statewide Collaborations:</span> Build partnerships with agencies, employers, and advisory councils to support employment opportunities for all workers.
              </li>
              <li>
                <span className='font-semibold'>Career Transition Support:</span> Assist 280 individuals in re-entering the workforce, aiming for 168 successful employment or educational outcomes.
              </li>
              <li>
                <span className='font-semibold'>Job Retention Assistance:</span> Help 420 individuals maintain employment, targeting 357 successful retention outcomes. 
              </li>
              <li>
                <span className='font-semibold'>Technology Integration: </span> to (a) ensure access to state-of-the-art workplace accommodations for project participants and (b) deliver transition and career navigation services in the modalities of participants&apos; choice.
              </li>
              <li>
                <span className='font-semibold'>Family and Community Support: </span> Offer resources like vocational rehabilitation, healthcare, transportation, and independent living support to enhance employment outcomes. 
              </li>
              <li>
                <span className='font-semibold'>Workforce Training: </span> Provide training and technical assistance to professionals and stakeholders to promote participation in all aspects of the workforce.
              </li>
              <li>
                <span className='font-semibold'>Online Resources:</span> Develop a project website and an Employment Portal for Long COVID, hosted by WVU's Job Accommodation Network (JAN). 
              </li>
            </ul>
          </div>
          {/* Right: Map Image */}
          <div className="flex-1 flex items-start justify-center">
            <img
              src="/CHPServiceRegionsMap.jpg"
              alt="Career Horizons Project Service Regions Map"
              role='CHPServiceRegionsMap'
              className="rounded-lg shadow-lg md:max-w-lg max-w-full object-contain max-h-800"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page