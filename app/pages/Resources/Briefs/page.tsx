import ArticleCard from '@/components/ArticleCard'
import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Resources Briefs</h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            The following briefs have been developed to provide insights and information on various topics related to Competitive Integrated Employment (CIE) and Long COVID.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <ArticleCard
            title="Understanding Competitive Integrated Employment"
            author="John Doe"
            date="March 10, 2025"
            brief="This brief explores the concept of Competitive Integrated Employment (CIE) and its importance for individuals with disabilities, including those affected by Long COVID."
          />
          <ArticleCard
            title="The Impact of Long COVID on Employment"
            author="Jane Smith"
            date="March 15, 2025"
            brief="This brief examines the challenges faced by individuals with Long COVID in the workplace and strategies for overcoming these barriers."
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page