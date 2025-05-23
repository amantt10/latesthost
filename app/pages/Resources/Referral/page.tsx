"use client"

import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  })

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [question]: value }))
  }

  const handleSubmit = () => {
    console.log('Answers:', answers) // Debugging line
    const allYes = Object.values(answers).every(answer => answer === 'yes')
    console.log('All Yes:', allYes) // Debugging line
    if (allYes) {
      router.push('/pages/ReferalResponsesPages/ContactInfo/')
    } else {
      router.push('/pages/ReferalResponsesPages/ThankyouPage/')
    }
  }

  return (
    <>
      <Mainnavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 p-6 rounded-lg shadow-md space-y-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Career Horizons Project Referral Survey</h1>
          <p className="text-lg text-gray-600">
            The Career Horizons Project (CHP) is funded by the U. S. Department of Education and seeks to facilitate competitive integrated employment for Mississippi residents between the ages of 16 and 70 with disabilities accompanied by or resulting from Long COVID Syndrome. The contents of this form were developed under a grant number H421F240107 from the Department of Education. However, those contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government. (Authority: 20 U.S.C. §§ 1221e-3 and 3474)
          </p>
          <h2 className='text-xl font-bold mb-4 mt-4 '>Long COVID Syndrome Disability Status</h2>

          <RadioGroup className='ml-5' onValueChange={(value) => handleAnswerChange('q1', value)}>
            <h3>1. Do you have a disability accompanied by or resulting from Long COVID Syndrome?</h3>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="y1" className=''/>
                <Label htmlFor="y1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="n1" />
                <Label htmlFor="n1">No</Label>
            </div>
          </RadioGroup>

          <RadioGroup className='ml-5' onValueChange={(value) => handleAnswerChange('q2', value)}>
            <h3>2. Are you a resident of the state of Mississippi?</h3>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="y2" />
                <Label htmlFor="y2">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="n2" />
                <Label htmlFor="n2">No</Label>
            </div>
          </RadioGroup>

          <RadioGroup className='ml-5' onValueChange={(value) => handleAnswerChange('q3', value)}>
            <h3>3. Are you between the ages of 16 and 70?</h3>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="y3" />
                <Label htmlFor="y3">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="n3" />
                <Label htmlFor="n3">No</Label>
            </div>
          </RadioGroup>

          <RadioGroup className='ml-5' onValueChange={(value) => handleAnswerChange('q4', value)}>
            <h3>4. If you are currently employed, are you interested in continuing to work</h3>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="y4" />
                <Label htmlFor="y4">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="n4" />
                <Label htmlFor="n4">No</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="not_employed" id="not_employed" />
                <Label htmlFor="not_employed">I&apos;m currently unemployed</Label>
            </div>
          </RadioGroup>

          <RadioGroup className='ml-5' onValueChange={(value) => handleAnswerChange('q5', value)}>
            <h3>5. Are you currently NOT participating in another project funded by the U. S. Department of Education's Disability Innovation Fund (DIF) Program?</h3>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="y5" />
                <Label htmlFor="y5">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="n5" />
                <Label htmlFor="n5">No</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-center mt-4">
            <button onClick={handleSubmit} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block min-w-[200px]">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>
                  Submit
                </span>
                <svg
                  fill="none"
                  role='none'
                  height="16"
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
                    role='none'
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page