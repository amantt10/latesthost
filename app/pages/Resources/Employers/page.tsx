import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { LinkPreview } from '@/components/ui/link-preview'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className='xl:container mx-auto md:max-w-4xl max-w-sm w-8/10 relative xl:justify-items-center'>
        <h1 className='text-3xl font-extrabold text-left justify-right mb-10 text-gray-800'>What does the Career Horizons Project do for employers?</h1>
        <div className="flex justify-start xl:justify-center mb-10">
        <img 
          src="/Resources/Remployers.jpg" 
          alt="Description of the image"
          role="Career Horizons Project" 
          className="rounded-lg shadow-lg max-w-full h-auto xl:max-w-58/100 lg:max-w-full md:max-w-2xl"
        />
      </div>
        <div className='grid grid-cols-1 gap-4'>
          <br />
          

          <p className='max-w-4xl text-gray-700 leading-relaxed'>
          The Career Horizons Project (CHP) provides employment services to help improve Competitive Integrated Employment (CIE) outcomes for Mississippi residents between the ages of 16 and 70 who have a disability accompanied by or resulting from Long COVID Syndrome, a chronic condition causing fatigue, cognitive issues, and breathing problems for weeks or months after COVID-19, substantially limiting major life activities. Once eligibility has been verified, an individual can be enrolled as a CHP participant to receive CIE placement or retention services based on the individual’s employment needs for up to eight months from date of enrollment. Once a CHP participant has completed their CIE Plan securing CIE or their eight-month service period has elapsed, CHP staff will conduct an exit interview and close the participant’s case. CHP staff will make final contact with CHP participants 12 months from their date of enrollment to conduct a follow up survey.<br/><br/> 

          Through the services we provide to CHP participants, we will expand the capacity for MS employers to hire and retain qualified workers with Long COVID. In addition to CIE services for CHP participants, demand-side employer engagement is a key feature of our project. We will provide direct services and consultation to employers regarding their overall approach to workplace inclusion and disability management to provide foundational infrastructure for job retention and career advancement one participant at a time and in general.<br/><br/>  

          
          Throughout this five-year project, CHP team members will apply evidence-based and evidence-supported practices that have already been validated in VR settings, novel and innovative approaches that have not yet been tested with people who have Long COVID, a vast network of state and national-level partners, advanced and assistive technology to support direct service delivery and on-the-job accommodations for CHP participants, family engagement and social support interventions, and demand-side job placement and retention approaches that build an stronger 21st Century workforce. For workers with Long COVID in MS, this initiative will result in improved rates of CIE and enhanced opportunities for self-reliance. For MS employers, it will result in improved capacity to utilize an important and largely untapped labor resource.   

          </p>

          <h3 className='text-3xl font-bold text-gray-800 mt-8'>Acquired Disability & Employment Portal (Coming Soon in Year 1)   </h3>
          <p className='max-w-4xl text-gray-700 leading-relaxed'>
          In partnership with the {" "}
                      <LinkPreview url="https://askjan.org/index.cfm" className="font-bold"> Job Accommodation Network (JAN)</LinkPreview> {" "} at West Virginia University (WVU), the CHP team will develop an Acquired Disabilities and Employment Portal that will be hosted on JAN’s extensive website with a link to CHP’s interactive project website. The portal will be a fully accessible, plain-language, and largely text-based resource populated with our own project findings as well as other information and resources related to the employment situation for people with disabilities experiencing Long COVID. Visitors to the portal will indicate their roles as workers with disabilities, employers, healthcare professionals, rehabilitation practitioners, etc. and be able to indicate their level of familiarity with the subject matter of particular sections of the portal, and the site will guide them to the level and type of information that is most compatible with their role and familiarity. The portal will feature multiple filters that may be applied to target users’ most immediate needs. Links will be provided to JAN’s other accommodation and ADA implementation resources that are part of its general website.<br/><br/>

 
                      Additional resources will be added to this page for employers as we develop them throughout the life of this five-year grant project. 
          </p>

          <h3 className='text-xl font-bold text-gray-800 mt-8'>Refer a Previous or Current Employee to the Career Horizons Project: </h3> 

            <p className='max-w-4xl text-gray-700 leading-relaxed'>Do you have an employee who wants to work but has had to stop working or is struggling to maintain employment due to a disability accompanied by or resulting from Long COVID? Refer them to the Career Horizons Project for competitive integrative employment (CIE) placement or retention services by completing our <a href='/pages/Referral/' className="font-semibold underline" aria-label="online referral form">
            online referral form.
          </a>
          </p>  
        </div>
      </div>
      <div className="flex justify-center px-4 py-8 mt-4 container mx-auto">
        {/* base = max-w-sm on mobile, md → max-w-xl, lg → max-w-5xl */}
        <div className="max-w-sm md:max-w-xl lg:max-w-4xl">
          <a
            href="/pages/Referral/"
          >
            <img
              src="/ReferralEmployee.png"
              role="Career Horizons Project"
              alt="Career Horizons Project"
              className="w-full h-auto rounded object-cover"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page