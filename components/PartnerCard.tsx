import React from 'react'
import { Card } from "flowbite-react"

interface PartnerCardProps {
  imgAlt: string;
  imgSrc: string;
  linkHref: string;
  linkText: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ imgAlt, imgSrc, linkHref, linkText }) => {
  return (
    <Card className="max-w-sm p-4">
      {/* logo wrapper: centers and constrains height */}
      <div className="flex justify-center items-center mb-4">
        <img
          src={imgSrc}
          alt={imgAlt}
          role={imgAlt}
          className="h-32 object-contain"
        />
      </div>
      <h5 className="text-lg font-semibold tracking-tight text-center">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:underline"
          aria-label="Learn more"
        >
          {linkText}
        </a>
      </h5>
    </Card>
  )
}

export default PartnerCard