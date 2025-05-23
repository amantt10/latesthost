import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { LinkPreview } from '@/components/ui/link-preview' // Assuming this component is correctly set up
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className='xl:container mx-auto md:max-w-5xl max-w-lg w-full px-4 py-10'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800'>Consultants</h1>

        {/* Dr. Paul Wehman Section */}
        <div className='mb-16 p-6 shadow-lg rounded-lg bg-white'>
          <div className='mb-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-700'>Dr. Paul Wehman</h2>
            <h4 className='text-md font-medium text-gray-600'>CIE Consultant</h4>
          </div>
          <div className='text-gray-700 leading-relaxed flow-root'>
            <img
              src='/paul.png' // Assuming image is in public folder
              alt='Dr. Paul Wehman'
              role='Dr. Paul Wehman'
              className='float-left mr-6 mb-4 w-32 md:w-40 h-auto object-cover object-top rounded-sm' // Adjusted size slightly for potentially new images
            />
            <p className='mb-4'>
              The CHP Disability Innovation Fund project is honored to have Dr. Paul Wehman join us as a consultant. With over four decades of leadership in the field of vocational rehabilitation, Dr. Wehman brings insight that strengthens our goal to support individuals with disabilities in achieving sustained, competitive employment through practical and scalable service models.
            </p>
            <p className='mb-4'>
              Dr. Wehman serves as a Professor at Virginia Commonwealth University (VCU) in both the School of Education and the Department of Physical Medicine and Rehabilitation. His educational background includes a Ph.D. in Behavioral Disabilities and Rehabilitation Psychology from the University of Wisconsin–Madison and a master’s in Experimental Psychology from Illinois State University.
            </p>
            <p className='mb-4'>
              A nationally respected leader in vocational rehabilitation, Dr. Wehman played a foundational role in establishing supported employment as a service model. His work continues to influence how vocational rehabilitation professionals, educators, and employment service providers support individuals with significant support needs across their employment journey, from high school transition through adult career development. His publications and technical guidance have informed how school systems, employers, and state VR agencies work together to increase access to employment for individuals with disabilities.
            </p>
            <p className='mb-4'>
              We are pleased to draw upon his expertise as we implement model strategies focused on real-world application and long-term impact.
            </p>
            <p>
              To learn more about Dr. Wehman’s background and contributions, please visit his{' '}
              <LinkPreview url="https://soe.vcu.edu/about-us/directory/full-directory/paul-wehman-phd.html" className="font-semibold hover:underline">
                VCU faculty Profile
              </LinkPreview>.
            </p>
          </div>
        </div>

        {/* Dr. Mykal J. Leslie Section */}
        <div className='mb-16 p-6 shadow-lg rounded-lg bg-white'>
          <div className='mb-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-700'>Dr. Mykal J. Leslie</h2>
            <h4 className='text-md font-medium text-gray-600'>External Evaluator</h4>
          </div>
          <div className='text-gray-700 leading-normal flow-root'>
            <img
              src='/Mykal.jpg' // Assuming image is in public folder
              alt='Dr. Mykal J. Leslie'
              role='Dr. Mykal J. Leslie'
              className='float-left mr-6 mb-4 w-32 md:w-40 h-auto object-cover object-top rounded-sm' // mr-6 for float-left
            />
            <p className='mb-4'>
              The CHP Disability Innovation Fund project has contracted with Dr. Mykal Leslie, who serves as a consultant to guide data evaluation, continuous quality improvement, and the measurement of CIE outcomes for individuals with disabilities participating in the project. Dr. Leslie provides expertise in developing and implementing evaluation frameworks that track participant progress, assess outreach and service delivery impact, and inform ongoing decision-making.
            </p>
            <p className='mb-4'>
              Dr. Leslie is currently the Director of Data and Evaluation at the Human Development Institute (HDI) at the University of Kentucky, where he oversees statewide and national disability-related projects focused on systems improvement, outcomes assessment, and community-based service evaluation. Prior to this role, he served for nearly a decade as a faculty member and Program Coordinator of the Rehabilitation Counseling program at Kent State University, where he also conducted research within the Center for Disability Studies.
            </p>
            <p className='mb-4'>
              Dr. Leslie is a Certified Rehabilitation Counselor (CRC) and a Licensed Professional Clinical Counselor with Supervision Designation (LPCC-S) in Ohio. He holds a Ph.D. in Counselor Education and Supervision from Kent State University, an M.Ed. in Clinical Rehabilitation Counseling from Ohio University, and a B.A. in Psychology from Marietta College.
            </p>
            <p className='mb-4'>
              Dr. Leslie’s research and evaluation portfolio focuses on employment experiences of individuals with neurological and emerging disabilities, workplace discrimination, accommodations, substance use recovery, and psychosocial adjustment to disability. He has authored or co-authored more than 25 peer-reviewed publications and book chapters and has delivered presentations at regional and national professional forums.
            </p>
            <p>
              In support of this DIF project, Dr. Leslie contributes to the design and analysis of performance metrics related to CIE outcomes, family engagement, service coordination, technology use, and the effectiveness of professional development activities delivered through the project. His work strengthens the project’s ability to demonstrate outcomes and inform future practices within vocational rehabilitation service systems.
            </p>
          </div>
        </div>

        {/* National Strategic Planning & Analysis Research Center Section */}
        <div className='p-6 shadow-lg rounded-lg bg-white'>
          <div className='mb-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-700'>National Strategic Planning & Analysis Research Center (NSPARC)</h2>
          </div>
          <div className='text-gray-700 leading-relaxed flow-root'>
            <img
              src='/nsparc.svg' // Assuming image is in public folder
              alt='NSPARC Logo'
              role='none'
              className='float-right ml-6 mb-4 w-64 md:w-96 h-auto object-cover object-top rounded-sm'
            />
            <p className='mb-4'>
              <LinkPreview url="https://www.nsparc.msstate.edu/" className="font-semibold hover:underline">MSU's NSPARC</LinkPreview> is a nationally recognized research center that supports data-driven decision-making across workforce development, education, economic development, and public policy. With over two decades of experience, NSPARC specializes in integrating and analyzing data from multiple sources to address complex challenges faced by state agencies, policymakers, educational institutions, and private-sector partners.
            </p>
            <p>
            NSPARC’s interdisciplinary team—including experts in sociology, economics, computer engineering, and public policy, along with professionals in data analytics and machine learning—produces research that is practical, actionable, and impactful. The center's collaborative approach and cross-domain expertise enable it to generate insights that help stakeholders design and implement solutions with real-world relevance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page