import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#5D1725] text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex flex-col md:ml-8">
            <p>Career Horizons Center</p>
            <p>P.O. Box 9736</p>
            <p>326 Hardy Road</p><br/>
            <p>Mississippi State, MS 39762</p><br/>
            <p>Phone: 662-325-8248</p>
            <p>Fax: 662-325-0896</p>
            <p>Email: careerhorizonsinfo@miod.msstate.edu</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-center">
        <div className="mb-4 md:mb-0">
          <a
            href="https://www.miod.msstate.edu/centers/career-horizons-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Career Horizons Center (opens in a new tab)"
            >
            <Image
              src="/miod.png"
              alt="Footer Logo"
              width={400}
              height={50}
            />
          </a>
          </div>
          <p className="mb-4 md:ml-8">Follow Us</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110' aria-label="Visit our Facebook page (opens in a new tab)">
              <FaFacebook size={24} role='none'/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110' aria-label="Visit our Instagram page (opens in a new tab)">
              <FaInstagram size={24} role='none'/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110' aria-label="Visit our Linkedin page (opens in a new tab)">
              <FaLinkedin size={24} role='none'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer