"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  buttonname: string;
  linkHref: string;
}

export function Card({ imageSrc, altText, title, description, buttonname, linkHref }: CardProps) {
  const router = useRouter();
  return (
    <div className="max-w-xl flex">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white flex flex-col h-full">
        <div className="flex-grow">
          <div className="relative w-full h-[300px] sm:h-[280px]">
            <Image
              src={imageSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-base font-semibold sm:text-xl text-center justify-center text-[var(--maroon-primary)] mt-4 mb-2 dark:text-neutral-200">
            {title}
          </h3>
          <p className="text-sm text-black">
            {description}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-[#5D1725] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block min-w-[200px]"
            onClick={() => router.push(linkHref)}>
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-[#5D1725] py-0.5 px-4 ring-1 ring-white/10">
              <span>
                {buttonname}
              </span>
              <svg
                fill="none"
                height="16"
                role='none'
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
                  role="none"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}