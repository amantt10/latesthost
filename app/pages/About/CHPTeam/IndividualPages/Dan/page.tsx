"use client"

import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React, { useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

const page = () => {
  const [activeTab, setActiveTab] = useState<'biography' | 'education' | 'more'>('biography')

  return (
    <>
      <Mainnavbar />
      {/* Responsive container for the header and border */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          {/* Responsive border that matches the width of the content below */}
          <div className="w-full md:w-[calc(32rem+2rem)] lg:w-[calc(32rem+2rem)] border-b border-gray-300 flex justify-center px-4">
            <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 py-2'>
            Dan Gadke 
            </h1>
          </div>
        </div>
      </div>

      {/* Responsive layout for image and info */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-10 px-4'>
        <img
          src="/members/Daniel.jpg"
          alt="Dan Gadke"
          role="Dan Gadke"
          className="w-50 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Division</h3>
            <p className='text-md'>Counseling, Higher Education Leadership, Educational Psychology, and Foundations</p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Title</h3>
            <p>CHP Co-Principal Investigator, Department Head, Professor of School Psychology, Associate Dean for Research </p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Contact</h3>
            <p className="flex items-center gap-2 text-[#5D1725] hover:cursor-pointer">
              <MdEmail className="text-[#5D1725] text-xl" />
              dgadke@colled.msstate.edu
            </p>
            <p className="flex items-center gap-2 text-[#5D1725] hover:cursor-pointer">
              <MdPhone className="text-[#5D1725] text-xl" />
              662-325-3312
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full flex flex-col items-center my-8 px-4">
        <div className="flex border-b mb-4 w-full max-w-2xl">
          <button
            className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'biography' ? 'border-b-2 border-[#5D1725] text-[#5D1725]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('biography')}
          >
            Biography
          </button>
          <button
            className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'education' ? 'border-b-2 border-[#5D1725] text-[#5D1725]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('education')}
          >
            Educational Background
          </button>
          <button
            className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'more' ? 'border-b-2 border-[#5D1725] text-[#5D1725]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('more')}
          >
            More Information
          </button>
        </div>
        <div className="w-full max-w-2xl p-4 bg-gray-50 rounded-lg shadow">
          {activeTab === 'biography' && (
            <div>
              <p>
              Dr. Daniel Gadke earned his Ph.D. in School Psychology from Illinois State University and completed his pre-doctoral and post-doctoral work at Johns Hopkins University School of Medicine and the Kennedy Krieger Institute in Baltimore, Maryland. Dan joined Mississippi State University in the Fall of 2013 as an Assistant Professor in the College of Education. Currently, he is a Professor of School Psychology and has serves as the Department Head of Counseling, Higher Education Leadership, Educational Psychology, and Foundations (CHEF) and as Associate Dean of Research for the College of Education. <br/><br/> 
              Dan co-founded Mississippi State University&apos;s Autism and Developmental Disabilities Clinic in 2014, which provides comprehensive pediatric psychological, behavioral, and academic services to children and adolescents with a wide range of disabilities. Dan&apos;s research interests include academic and behavioral interventions from an applied behavioral analytic model using single-subject design research methodology. He currently has 47 peer-reviewed publications and over 140 international and national presentations. He has also been awarded approximately $23.2 million in external grant and foundation awards as PI or Co-PI. Dr. Gadke is a Licensed Psychologist, Board Certified Behavior Analyst, and a Nationally Certified School Psychologist.
              </p>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="px-2 md:px-6">
              <ul className="list-disc pl-6 md:pl-8">
                <li>B.S., Illinois State University, Psychology </li>
                <li>M.S., Illinois State University, Psychology </li>
                <li>Ph.D., Illinois State University, School Psychology </li>
                <li>Post-doctorate, Johns Hopkins School of Medicine/Kennedy Kreiger Institute, Department of Behavioral </li>
                <li>Psychology - Pediatric Developmental Disabilities Clinic</li>
              </ul>
            </div>
          )}
          {activeTab === 'more' && (
            <div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://www.chef.msstate.edu/directory/dgadke"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Home Page links"
                  className="bg-[#5D1725] no-underline group cursor-pointer relative shadow-2xl rounded-full p-px text-sm font-semibold leading-6 text-neutral-200 inline-block min-w-[200px] mt-10"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10">
                    <span className='text-neutral-200'>Home Page links</span>
                    <svg
                      fill="none"
                      height="16"
                      role='presetation'
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        role='presentation'
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page