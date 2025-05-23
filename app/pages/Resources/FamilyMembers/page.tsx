import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { LinkPreview } from '@/components/ui/link-preview'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className='xl:container mx-auto md:max-w-4xl max-w-sm w-8/10 relative xl:justify-items-center'>
        <h1 className='text-3xl font-extrabold text-left justify-right mb-10 text-gray-800'>What does the Career Horizons Project do for family members?  </h1>
        <div className="flex justify-start xl:justify-center mb-10">
        <img 
          src="/Resources/familymembers.jpg" 
          alt="Description of the image" 
          role="Career Horizons Project"
          className="rounded-lg shadow-lg max-w-full h-auto xl:max-w-58/100 lg:max-w-full md:max-w-2xl"
        />
      </div>
        <div className='grid grid-cols-1 gap-4'>
          <br />
          

          <p className='max-w-4xl text-gray-700 leading-relaxed'>
          Do you have a family member who has had to stop working or is struggling to maintain employment due to a disability accompanied by or resulting from Long COVID? The Career Horizons Project (CHP) provides employment services to help improve Competitive Integrated Employment (CIE) outcomes for Mississippi residents between the ages of 16 and 70 who have a disability accompanied by or resulting from Long COVID Syndrome, a chronic condition causing fatigue, cognitive issues, and breathing problems for weeks or months after COVID-19, substantially limiting major life activities. Once eligibility has been verified, an individual can be enrolled as a CHP participant to receive CIE Placement or Retention services based on the individual’s employment needs for up to eight months from date of enrollment. CHP staff will work with participants to develop a CIE plan that will include a statement of the participant’s long-term career objectives and the supports from CHP and MDRS that may be needed to achieve those objectives. Family members and social support providers will be included as valuable resources in the CIE plan. Once a CHP participant has completed their CIE Plan securing or maintaining CIE or their eight-month service period has elapsed, CHP staff will conduct an exit interview and close the participant’s case. CHP staff will make final contact with CHP participants 12 months from their date of enrollment to conduct a follow up survey.<br/><br/>   

          CIE Placement services will be accompanied by a comprehensive network of family, social, mental health, and healthcare supports that facilitate CIE and address the social determinants of health and employment. These supports will include a family engagement curriculum developed in Year 1 with input from CHP’s Project Advisory Council (PAC), transportation, housing, food security, childcare, opportunities for assistive technology, counseling and support groups, parent advocacy, guardianship, adult protective services, probation and parole, corrections, child and family services, disability benefits, Veterans Administration (VA), medical and mental health services, substance abuse treatment, adult and postsecondary education, job training programs in addition to MDRS, Pre-ETS and transition services, public health and safety, and financial literacy. CHP staff working directly with participants will make referrals to agencies throughout the state that provide these supports based on the participant’s individual needs.      

          </p>

          <h3 className='text-3xl font-bold text-gray-800 mt-8'>Acquired Disabilities & Employment Portal (Coming Soon in Year 1)</h3>
          <div className='max-w-4xl text-gray-700 leading-relaxed'>
          In partnership with the {" "}
                      <LinkPreview url="https://askjan.org/index.cfm" className="font-bold"> Job Accommodation Network (JAN)</LinkPreview> {" "} at West Virginia University (WVU), the CHP team will develop an Acquired Disabilities and Employment Portal that will be hosted on JAN’s extensive website with a link to CHP’s interactive project website. The portal will be a fully accessible, plain-language, and largely text-based resource populated with our own project findings as well as other information and resources related to the employment situation for people with disabilities experiencing Long COVID. Visitors to the portal will indicate their roles as workers with disabilities, employers, healthcare professionals, rehabilitation practitioners, etc. and be able to indicate their level of familiarity with the subject matter of particular sections of the portal, and the site will guide them to the level and type of information that is most compatible with their role and familiarity. The portal will feature multiple filters that may be applied to target users’ most immediate needs. Links will be provided to JAN’s other accommodation and ADA implementation resources that are part of its general website. <br/><br/>

 
                      Additional resources will be added to this page for family members as we develop them throughout the life of this five-year grant project.
          </div>

          <h3 className='text-xl font-bold text-gray-800 mt-8'>Refer Your Family Member to the Career Horizons Project: </h3> 

            <p className='max-w-4xl text-gray-700 leading-relaxed'>Do you know someone who wants to work but has had to stop working or is struggling to maintain employment due to a disability accompanied by or resulting from Long COVID? Refer them to the Career Horizons Project for competitive integrative employment (CIE) placement or retention services by completing our <a href='/pages/Referral/' className="font-semibold underline" aria-label="online referral form">
            online referral form.
          </a>
          </p>  
        </div>
      </div>
      <div className="flex justify-center px-4 py-8 mt-4 container mx-auto">
        <div className="max-w-sm md:max-w-xl lg:max-w-4xl">
          <a
            href="/pages/Referral/"
          >
            <img
              src="/referralfamily.png"
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