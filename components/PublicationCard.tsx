import React from 'react';
import { FaDownload } from 'react-icons/fa';

interface PublicationCardProps {
  imageSrc: string;
  title: string;
  pdfLink: string;
  webLink: string;
  source: string;
  date: string;
  version: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ imageSrc, title, pdfLink, webLink, source, date, version }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
      <img src={imageSrc} alt={title} role="none" className="w-1/2 md:w-1/4 h-3/4 mb-4 md:mb-0 md:mr-6" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          <a className="text-gray-800 hover:underline">
            {title}
          </a>
        </h2>
        <p className="text-gray-600">
          {source} | {date} | <a className="text-[var(--maroon-primary)] hover:underline">{version}</a>
        </p>
        <div className="flex mt-4">
          <a className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block min-w-[200px]">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <FaDownload role='none'/>
              <span>
                Download
              </span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;