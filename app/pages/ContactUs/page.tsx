"use client";

import React, { useState } from 'react';
import { MdCopyAll, MdEmail, MdFax, MdPhone } from 'react-icons/md';
import Mainnavbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = () => {
  const [hovered, setHovered] = useState<'phone' | 'fax' | 'email' | null>(null);
  const [copied, setCopied] = useState<'phone' | 'fax' | 'email' | null>(null);

  const emailAddress = 'careerhorizonsinfo@miod.msstate.edu';
  const phoneNumber = '662 325 8248';
  const faxNumber = '662.325.0896';

  const handleCopy = (key: 'phone' | 'fax' | 'email', text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
      })
      .catch(console.error);
  };

  return (
    <>
      <Mainnavbar />

      <div className="bg-[#6e1f2e] text-white text-center py-8 px-4 h-[70vh] text-xl flex flex-col items-center justify-center xl:container container md:max-w-4xl max-w-md rounded-md mx-auto w-8/10">
        <p className="mb-10 text-7xl font-semibold">Career Horizons Project</p>
        <p className="mb-1">326 Hardy Road</p>
        <p className="mb-1">P. O. Box 9736</p>
        <p className="mb-10">Mississippi State, MS 39762</p>

        {/* Phone */}
        <p
          className="mb-1 flex items-center space-x-2"
          onMouseEnter={() => setHovered('phone')}
          onMouseLeave={() => setHovered(null)}
        >
          <MdPhone className="text-white text-xl" />
          <span>Phone: {phoneNumber}</span>
          {hovered === 'phone' && (
            <MdCopyAll
              className="ml-2 text-white text-xl hover:text-green-300 cursor-pointer"
              onClick={() => handleCopy('phone', phoneNumber)}
            />
          )}
          {copied === 'phone' && (
            <span className="ml-2 text-sm text-green-300">Copied!</span>
          )}
        </p>

        {/* Fax */}
        <p
          className="mb-1 flex items-center space-x-2"
          onMouseEnter={() => setHovered('fax')}
          onMouseLeave={() => setHovered(null)}
        >
          <MdFax className="text-white text-xl" />
          <span>Fax: {faxNumber}</span>
          {hovered === 'fax' && (
            <MdCopyAll
              className="ml-2 text-white text-xl hover:text-green-300 cursor-pointer"
              onClick={() => handleCopy('fax', faxNumber)}
            />
          )}
          {copied === 'fax' && (
            <span className="ml-2 text-sm text-green-300">Copied!</span>
          )}
        </p>

        {/* Email */}
        <p
          className="flex items-center space-x-2"
          onMouseEnter={() => setHovered('email')}
          onMouseLeave={() => setHovered(null)}
        >
          <MdEmail className="text-white text-xl" />
          <span>Email: {emailAddress}</span>
          {hovered === 'email' && (
            <MdCopyAll
              className="ml-2 text-white text-xl hover:text-green-300 cursor-pointer"
              onClick={() => handleCopy('email', emailAddress)}
            />
          )}
          {copied === 'email' && (
            <span className="ml-2 text-sm text-green-300">Copied!</span>
          )}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default page;