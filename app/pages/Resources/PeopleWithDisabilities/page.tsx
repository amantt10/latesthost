"use client"
import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { motion } from 'framer-motion'
import { LinkPreview } from '@/components/ui/link-preview'
import { useRouter } from 'next/navigation'
import { Spotlight } from '@/components/ui/spotlight-new'
import { BsCheckSquareFill } from 'react-icons/bs'

const page = () => {
  const router = useRouter()
  return (
    <>
      <Mainnavbar />
      <div className="flex justify-center px-4 py-8 mt-4 container mx-auto">
        <div className="sm:max-w-sm md:max-w-3xl lg:max-w-5xl max-w-4xl">
          <a href="/pages/Referral/">
          <img
            src="/referraldisability.jpg"
            alt="Career Horizons Project"
            role="Career Horizons Project"
            className="w-full h-auto rounded object-cover"
          />
          </a>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className='max-w-4xl mx-auto'>
        <h1 className="text-3xl font-bold mb-4">
            What does the Career Horizons Project do for people with disabilities?
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          The Career Horizons Project (CHP) provides employment services to help improve Competitive Integrated Employment (CIE) outcomes for Mississippi residents between the ages of 16 and 70 who have a disability accompanied by or resulting from Long COVID Syndrome, a chronic condition causing fatigue, cognitive issues, and breathing problems for weeks or months after COVID-19, substantially limiting major life activities. Once eligibility has been verified, an individual can be enrolled as a CHP participant to receive CIE Placement or Retention services based on the individual’s employment needs for up to eight months from date of enrollment. Once a CHP participant has completed their CIE Plan securing or maintaining CIE or their eight-month service period has elapsed, CHP staff will conduct an exit interview and close the participant’s case. CHP staff will make final contact with CHP participants 12 months from their date of enrollment to conduct a follow up survey.    
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
        <h2 className="text-3xl text-black font-bold mb-4">
        Refer Yourself to the Career Horizons Project: 
          </h2>
          <p className="text-lg  text-gray-600 mb-8">
          Do you have an interest in working but have had to stop working or are struggling to maintain employment due to a disability accompanied by or resulting from Long COVID? If so, complete our <a href='/pages/Referral/' className="font-semibold underline" aria-label="self referral form">
          Self-referral
            </a> Form and refer yourself to the Career Horizons Project for competitive integrative employment (CIE) placement or retention services.   
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
        <h3 className="text-3xl font-bold mb-4">
        Acquired Disability & Employment Portal(Coming Soon in Year 1)
          </h3>
          <p className="text-lg text-gray-600 mb-8">
          In partnership with the <LinkPreview url="https://askjan.org/index.cfm" className="font-semibold underline ">
          Job Accommodation Network (JAN)
            </LinkPreview> at West Virginia University (WVU), the CHP team will develop an Acquired Disabilities and Employment Portal that will be hosted on JAN’s extensive website with a link to CHP’s interactive project website. The portal will be a fully accessible, plain-language, and largely text-based resource populated with our own project findings as well as other information and resources related to the employment situation for people with disabilities experiencing Long COVID. Visitors to the portal will indicate their roles as workers with disabilities, employers, healthcare professionals, rehabilitation practitioners, etc. and be able to indicate their level of familiarity with the subject matter of particular sections of the portal, and the site will guide them to the level and type of information that is most compatible with their role and familiarity. The portal will feature multiple filters that may be applied to target users’ most immediate needs. Links will be provided to JAN’s other accommodation and ADA implementation resources that are part of its general website. 
            <br/><br/>
            Additional resources will be added to this page for people with disabilities as we develop them throughout the life of this five-year grant project.
          </p>
        </div>

        <div className="flex justify-start xl:justify-center mb-10">
        <img 
          src="/Resources/referralpicdisability.jpg" 
          alt="Description of the image" 
          role="Career Horizons Project"
          className="rounded-lg shadow-lg max-w-full h-auto xl:max-w-58/100 lg:max-w-full md:max-w-2xl"
        />
      </div>

      </div>
      <Footer />
    </>
  )
}

export default page