import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { Spotlight } from '@/components/ui/spotlight-new'
import YouTubeVideoCard from '@/components/YoutubeVideoCard'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />
        <div className="sm:h-[30rem] xl:max-w-7xl xl:container mx-auto md:max-w-4xl h-[15rem] max-w-sm w-8/10 rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex-col">
              <Spotlight />
              <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Webcasts & Webinars
                </h1>
            </div>
        </div>
        <div className='mt-4'>
            <YouTubeVideoCard
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Title"
                description="This is a description of what the video is about. It provides an overview of the content covered in the webinar and what viewers can expect to learn."
            />

            <YouTubeVideoCard
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Title"
                description="This is a description of what the video is about. It provides an overview of the content covered in the webinar and what viewers can expect to learn."
            />
        </div>
      <Footer />
    </>
  )
}

export default page