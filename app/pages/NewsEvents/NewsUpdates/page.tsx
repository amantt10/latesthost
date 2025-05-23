import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

type NewsItem = {
  title: string
  date: string
  author: string
  description: string
  publishedIn: string
  link: string
}

// reverse-chronological list
const newsUpdates: NewsItem[] = [
  {
    title: 'Career Horizons Center at MSU aids Mississippians with long COVID get and keep jobs. See how ',
    date: 'February 7, 2025',
    author: 'Mary Boyte',
    description:
      'Following the first major waves of the COVID-19 pandemic, Mississippi was among the states with the highest rates of long COVID cases, a condition that has been proven to make everyday life, including [...]',
    publishedIn: 'Mississippi Clarion Ledger',
    link: 'https://www.clarionledger.com/story/news/2025/02/07/new-project-at-msu-helps-working-mississippians-with-long-covid/77912403007/',
  },
  {
    title: 'Mississippians Living with Long COVID and Employment Support',
    date: 'September 24, 2024',
    author: 'Mississippi Public Broadcasting',
    description:
      "The latest grades for Mississippi schools and districts are in. How well are the state's schools performing? Then, Mississippians living with long COVID will soon have help regaining employment. Plus, the story of a [...]",
    publishedIn: "MPB Radio’s “Mississippi Edition”",
    link: 'https://shows.acast.com/5d892b22719a100a4a0192bd/episodes/66ec47ff9e9e392fde0dec99',
  },
  {
    title: 'MSU grant to help those disabled by long COVID-19 enter workforce',
    date: 'September 15, 2024',
    author: 'Garret Grove',
    description: 'STARKVILLE, Miss. (WJTV) – A multi-million dollar grant for Mississippi State University (MSU) seeks to help students with COVID-related disabilities gain education and employment. Long COVID-19 is a condition that is marked by the presence of [...]',
    publishedIn: 'WJTV 12 News',
    link: 'https://www.wjtv.com/news/education/msu-grant-to-help-those-disabled-by-long-covid-19-enter-workforce/',
  },
  {
    title: 'MSU Gets $9.99M to Improve Employment Opportunities for People with Disabilities',
    date: 'September 10, 2024',
    author: 'Brett Campbell',
    description:
      'Tuesday, the U.S. Department of Education awarded more than $251 million to 27 entities nationwide who are working to ensure individuals with disabilities have access to in-demand, well-paying jobs. Mississippi State University was selected [...]',
    publishedIn: 'The Daily Leader',
    link: 'https://www.dailyleader.com/2024/09/10/msu-gets-9-99m-to-improve-employment-opportunities-for-people-with-disabilities/',
  },
  {
    title: 'Mississippi State Granted $9.99 Million to Improve Employment Opportunities for Individuals with Disabilities',
    date: 'September 10, 2024',
    author: 'SuperTalk Mississippi',
    description:
      'As part of a nationwide grant program through the U.S. Department of Education, Mississippi State University will receive nearly $10 million to further employment opportunities for individuals with disabilities. Officials at the university in Starkville successfully applied [...]',
    publishedIn: 'SuperTalk Mississippi',
    link: 'https://www.supertalk.fm/mississippi-state-granted-9-9-million-to-improve-employment-opportunities-for-individuals-with-disabilities',
  },
  {
    title: 'MSU Garners $9.9 Million Grant to Advance Workforce Reintegration for Mississippians with Disabilities',
    date: 'September 2024',
    author: 'MSU Newsroom',
    description:
      'STARKVILLE, Miss.—A team of faculty members in Mississippi State’s College of Education has been awarded a $9.9 million grant by the U.S. Department of Education’s Rehabilitation Services Administration to help individuals with disabilities gain and retain meaningful employment in the Magnolia State. The five-year grant [...]',
    publishedIn: 'Mississippi State University Newsroom',
    link: 'https://www.msstate.edu/newsroom/article/2024/09/msu-garners-99-million-grant-advance-workforce-reintegration',
  },
]

const page = () => {
  return (
    <>
      <Mainnavbar />

      <div className="container mx-auto px-4 py-8 space-y-12">
        {newsUpdates.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 pb-6 last:border-none last:pb-0"
          >
            <h2 className="text-2xl font-semibold text-[#5D1725]">
             <Link href={item.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
               {item.title}
             </Link>
           </h2>
            <p className="mt-1 text-sm text-gray-500">
              Posted on{" "}
              <Link href={item.link} className="underline text-[#5D1725]" target="_blank" rel="noopener noreferrer">
                {item.date}
              </Link>{" "}
              by{" "}
              <Link href={item.link} className="underline text-[#5D1725]" target="_blank" rel="noopener noreferrer">
                {item.author} 
              </Link>
            </p>
            <p className="mt-3 text-base text-gray-900">{item.description}</p>
            <p className="mt-1 text-sm text-gray-500">
            Published in{" "}
              <Link href={item.link} className="underline text-[#5D1725]" target="_blank" rel="noopener noreferrer">
                {item.publishedIn}
              </Link>
            </p>
            <a
              href={item.link}
              className="mt-2 inline-block text-[#5D1725] hover:underline text-sm"
              target="_blank" rel="noopener noreferrer" aria-label="Read more"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </>
  )
}

export default page