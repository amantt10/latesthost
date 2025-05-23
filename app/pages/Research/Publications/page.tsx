import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import PublicationCard from '@/components/PublicationCard'
import React from 'react'

const articles = [
  {
    imageSrc: '/globe.svg',
    title: 'Article Title',
    pdfLink: '/MedicalDocumentationResonspetoRAEAP.pdf',
    webLink: 'https://example.com/article',
    source: 'Illinois Department of Human Services',
    date: 'November 30, 2023',
    version: 'Web version'
  },
  {
    imageSrc: '/file.svg',
    title: 'Article Title',
    pdfLink: '/MedicalDocumentationResonspetoRAEAP.pdf',
    webLink: 'https://example.com/article',
    source: 'Illinois Department of Human Services',
    date: 'November 30, 2023',
    version: 'Web version'
  },
  
];

const page = () => {
  return (
    <>
      <Mainnavbar />
      <div className="container mx-auto mt-20 md:max-w-4xl max-w-sm w-8/10">
        <h1 className="text-4xl font-bold mb-10">Publications</h1>
        <div className="grid grid-cols-1 gap-8">
          {articles.map((article, index) => (
            <PublicationCard
              key={index}
              imageSrc={article.imageSrc }
              title={article.title}
              pdfLink={article.pdfLink}
              webLink={article.webLink}
              source={article.source}
              date={article.date}
              version={article.version}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page