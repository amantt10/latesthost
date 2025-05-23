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
            Annalise Sarda
            </h1>
          </div>
        </div>
      </div>

      {/* Responsive layout for image and info */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-10 px-4'>
        <img
          src="/members/Annalise.jpg"
          alt="Annalise Sarda"
          role="Annalise Sarda"
          className="w-50 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Division</h3>
            <p className='text-md'>Mississippi Institute on Disabilities</p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Title</h3>
            <p>Graduate Research Assistant </p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Contact</h3>
            <p className="flex items-center gap-2 text-[#5D1725] hover:cursor-pointer">
              <MdEmail className="text-[#5D1725] text-xl" />
              aes909@msstate.edu
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
              Annalise Sarda is a graduate research assistant for the Career Horizons Project and a graduate student in the Rehabilitation Counseling program at Mississippi State University. Her work focuses conducting literature reviews and developing community-based resource databases. Annalise&apos;s academic and professional experiences have fueled her passion for resilience-building interventions, trauma-informed care, and disability advocacy. Annalise has a background in applied research with community-based interventions. 

              </p>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="px-2 md:px-6">
              <ul className="list-disc pl-6 md:pl-8">
                <li>Bachelors of Psychology, Cleveland State University</li>
                <li>Masters of Rehabilitation Counseling, Mississippi State University (In Progress) </li>
              </ul>
            </div>
          )}
          {activeTab === 'more' && (
            <div>
              <div className="flex justify-center mt-4">
                <a
                  href=""
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
                      viewBox="0 0 24 24"
                      width="16"
                      role='presentation'
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