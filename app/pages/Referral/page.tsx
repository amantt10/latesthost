"use client"

import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();

    interface ParsedLabel {
        main: string;
        sub: string | null;
    }

    const parseLabel = (label: string): ParsedLabel => {
        const match = label.match(/^(.*?)\s*\((.*?)\)$/);
        if (match) {
            return { main: match[1].trim(), sub: match[2].trim() };
        }
        return { main: label, sub: null };
    };

    return (
        <>
            <Mainnavbar />
            <div className='container mx-auto flex flex-col items-center justify-center space-y-4 py-8'>
                <h1 className='text-2xl font-bold text-center'>I am a/an...</h1>

                <div className="w-[450px] max-w-full flex flex-col space-y-4">
                  {[
                    { label: "Individual with a Disability", url: "https://forms.office.com/r/KuMzzhTLys" },
                    { label: "Family Member of an Individual with a Disability", url: "https://forms.office.com/r/ufu6LtCuDX" },
                    { label: "Employer", url: "https://forms.office.com/r/ufu6LtCuDX" },
                    { label: "Community Organization (e.g. Disability Rights of MS, Accelerate MS, The ARC, etc.)", url: "https://forms.office.com/r/ufu6LtCuDX" },
                    { label: "Healthcare Provider (e.g. hospital, treatment facility, physician, etc.)", url: "https://forms.office.com/r/ufu6LtCuDX" },
                    { label: "Social Service Agency (e.g. MS Dept. of Rehabilitation Services, MS Dept. of Human Services, MS Dept. of Mental Health, etc.)", url: "https://forms.office.com/r/ufu6LtCuDX" },
                  ].map(({label, url}, i) => {
                    const { main, sub } = parseLabel(label);
                    return (
                      <button
                        key={i}
                        onClick={() => window.open(url, "_blank")}
                        className="
                          w-full
                          h-20
                          bg-[#5D1725]
                          group
                          cursor-pointer
                          relative
                          rounded-full
                          text-white
                          whitespace-normal
                          text-center
                          py-3
                          px-4
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <span className="absolute inset-0 overflow-hidden rounded-full"></span>
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <span className="text-sm font-semibold leading-6">{main}</span>
                          {sub && (
                            <span className="text-xs font-normal leading-tight mt-1">{sub}</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

            </div>
            <Footer />
        </>
    )
}

export default page