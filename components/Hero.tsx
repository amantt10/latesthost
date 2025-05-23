"use client";
import React from "react";
import { Card } from "./Card";
import { cardData } from "@/constants";
import { useRouter } from "next/navigation";
import { Spotlight } from "./ui/spotlight-new";
import '../app/globals.css';
import { LinkPreview } from "./ui/link-preview";

export function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="sm:h-[30rem] h-[40rem] xl:container container md:max-w-4xl max-w-sm rounded-md mx-auto w-9/10 items-center justify-center flex flex-col bg-[#5D1725] antialiased relative overflow-hidden">
        <div className="p-4 xl:max-w-7xl max-w-3xl mx-auto relative z-12 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-white leading-normal">
            The Career Horizons Project
          </h1>
          <p className="mt-4 font-normal text-base text-white max-w-4xl text-center mx-auto">
            The Career Horizons Project (CHP), a 5-year grant funded by the U. S. Department of Education, will strive to serve a total of 700 Mississippi residents with disabilities accompanied by or resulting from Long Covid Syndrome by providing placement and retention services for competitive integrated employment (CIE).
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-4 mx-auto xl:container justify-items-center md:max-w-4xl max-w-sm w-9/10 mt-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
            buttonname={card.buttonname}
            linkHref={card.linkHref || ""}
          />
        ))}
      </div>

      <div className='max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto mt-10'>
              <h2 className="text-3xl font-bold mb-4 text-black">
              Refer an Individual to the Career Horizons Project: 
                </h2>
                <p className="text-lg text-black mb-8">
                Do you know someone who wants to work but has had to stop working or is struggling to maintain employment due to a disability accompanied by or resulting from Long COVID? If so, refer them to the Career Horizons Project to receive competitive integrative employment (CIE) placement or retention services by completing our <a
                    className="underline font-bold text-black"
                    href="/pages/Referral/"
                  >
            online referral form.
          </a>
                </p>
              </div>
      
      <div className="flex justify-center px-4 py-8 mt-4 container mx-auto">
        <div className="max-w-sm md:max-w-2xl lg:max-w-5xl">
          <a
            href="/pages/Referral/"
          >
            <img
              src="/referralhome.png"
              role="Career Horizons Project"
              alt="Career Horizons Project"
              className="w-full h-auto rounded object-cover"
            />
          </a>
        </div>
      </div>

      <div
        className="
          text-white bg-[#5D1725]
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-8
          rounded-lg shadow-lg
          max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-5xl
          mx-auto
          text-xs sm:text-sm md:text-base
          leading-relaxed 
          mt-6 sm:mt-8 md:mt-10
        "
      >
        The contents of this website were developed under grant H421F240107 from the U.S. Department of Education (Department). The Department does not mandate or prescribe practices, models, or other activities described or discussed in this document. The contents of this website may contain examples of, adaptations of, and links to resources created and maintained by another public or private organization. The Department does not control or guarantee the accuracy, relevance, timeliness, or completeness of this outside information. The content of this website does not necessarily represent the policy of the Department. This publication is not intended to represent the views or policy of or be an endorsement of any views expressed or materials provided by any Federal agency.
      </div>
    </>
  );
}