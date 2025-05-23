import React from 'react';
import { FaFacebook } from 'react-icons/fa';

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  brief: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, author, date, brief }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg xl:w-full lg:max-w-7xl md:max-w-4xl max-w-sm w-8/10 transition-transform transform hover:scale-105 hover:cursor-pointer">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-md text-gray-600 mt-2">by {author}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-lg text-gray-700 mt-4 leading-relaxed">{brief}</p>
      <div className="flex items-center mt-6 space-x-4">
        <span className="text-gray-600 font-semibold">Share this story:</span>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110' aria-label="Visit our Facebook page">
                    <FaFacebook role="none" className="hover:scale-100 mr-2 ml-2 mt-1" size={16} />
        </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 mt-1.5' aria-label="Visit our Twitter page">
         <img src="/xtwitter.svg" role='none' alt="Twitter X" className="w-3 h-3 filter invert" />
      </a>
      </div>
    </div>
  );
};

export default ArticleCard;