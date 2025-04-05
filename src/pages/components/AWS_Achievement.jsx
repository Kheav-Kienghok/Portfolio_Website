import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AWS_Achievement = () => {

  return (
    <div className="font-[Lato-Thin] border-2 border-gray-300 rounded-lg p-4 mt-8 mb-15"
      style={{
        borderWidth: '2px',                 // Fallback for border-2
        borderColor: '#d1d5db',             // Fallback for border-gray-300
        borderStyle: 'solid',               // ✅ Required to render the border color
        borderRadius: '0.5rem',             // Fallback for rounded-lg (8px)
        WebkitBorderRadius: '0.5rem',       // Fallback for older iOS Safari
        padding: '1rem',                    // Fallback for p-4 (16px)
        WebkitPadding: '1rem'              // Fallback for iOS 9 and below (rare, but safe)
      }}
    >
      <h3 className="font-funnel text-xl font-semibold text-gray-800 mb-4"
        style={{ 
          color: '#1f2937', // Equivalent to Tailwind's text-gray-800
        }}
      >
        AWS Certifications
      </h3>
      <p className="text-gray-600 mb-7 text-lg"
        style={{
          color: '#4B5563' // Equivalent to Tailwind's text-gray-600
        }}
      >
        I have developed expertise in AWS cloud technologies. Below are my certifications:
      </p>
      
      <div className="flex justify-center gap-8 flex-wrap">
        {[
          {
            link: "https://www.credly.com/badges/33cf15f7-b082-4d99-925e-ae13cfd55b83",
            imgSrc: "https://images.credly.com/size/680x680/images/fa80f3f2-0383-4d44-8c14-099e2eb3be36/image.png",
            alt: "AWS Academy Cloud Operations Badge",
            title: "Cloud Operations",
          },
          {
            link: "https://www.credly.com/badges/354aa9bb-79bc-4963-8b04-0ee02ba9c6bf",
            imgSrc: "https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
            alt: "AWS Certified Cloud Practitioner Badge",
            title: "Cloud Practitioner",
          },
          {
            link: "https://www.credly.com/badges/285fee43-bfe8-4270-9520-204cf19cce25",
            imgSrc: "https://images.credly.com/size/680x680/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png",
            alt: "AWS Certified Cloud Developing Badge",
            title: "Cloud Developing",
          },
        ].map((badge, index) => (
          <Link 
            key={index} 
            to={badge.link} 
            target="_blank" 
            className="p-2 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:border-blue-500"
            style={{
              borderWidth: '2px', // Fallback for border-2
              borderColor: '#d1d5db', // Fallback for border-gray-300
              borderRadius: '0.5rem', // Fallback for rounded-lg
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Fallback for shadow-lg
              transition: 'all 0.3s ease-in-out', // Fallback for transition-all
            }}
          >
            <img
              src={badge.imgSrc}
              alt={badge.alt}
              width="120"
              height="120"
              className="rounded-lg"
            />
            <span 
              className="block text-center text-sm font-medium text-gray-700"
              style={{ color: '#374151' }} // Fallback for text-gray-700
            >
              AWS <br />{badge.title}
            </span>
          </Link>
        ))}
      </div>

    </div>
    
  );
};

export default AWS_Achievement;