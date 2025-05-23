import React from 'react';

interface YouTubeVideoCardProps {
  videoUrl: string;
  title: string;
  description: string;
}

const YouTubeVideoCard: React.FC<YouTubeVideoCardProps> = ({ videoUrl, title, description }) => {
  return (
    <div className="flex justify-center mt-8 items-center">
      <div className="p-6 rounded-lg shadow-lg bg-white xl:w-full xl:max-w-7xl flex md:max-w-4xl max-w-sm w-8/10">
        <div className="sm:w-1/3 w-1/2">
          <iframe
            width="100%"
            height="200"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <div className="sm:w-2/3 pl-6 w-1/2">
          <h1 className="sm:text-xl font-extrabold text-gray-800 text-lg leading-tight">{title}</h1>
          <p className="sm:text-md text-gray-700 mt-4 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoCard;