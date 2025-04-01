import React from 'react'

const Achievement = () => {
  return (

    <div className="max-w-5xl mx-auto px-4 text-center">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">AWS Certifications</h3>
      <p className="text-gray-600 mb-8">I have developed expertise in AWS cloud technologies. Below are my certifications:</p>
      <div className="flex justify-center gap-8 flex-wrap">
        <a href="https://www.credly.com/badges/33cf15f7-b082-4d99-925e-ae13cfd55b83" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:border-blue-500">
          <img
            src="https://images.credly.com/size/680x680/images/fa80f3f2-0383-4d44-8c14-099e2eb3be36/image.png"
            alt="AWS Academy Cloud Operations Badge"
            width="120"
            height="120"
            className="rounded-lg"
          />
        </a>
        <a href="https://www.credly.com/badges/354aa9bb-79bc-4963-8b04-0ee02ba9c6bf" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:border-blue-500">
          <img
            src="https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png"
            alt="AWS Certified Cloud Practitioner Badge"
            width="120"
            height="120"
            className="rounded-lg"
          />
        </a>
        <a href="https://www.credly.com/badges/285fee43-bfe8-4270-9520-204cf19cce25/public_url" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:border-blue-500">
          <img
            src="https://images.credly.com/size/680x680/images/119182cf-ca68-495a-a415-bff62dfdcc7e/image.png"
            alt="AWS Certified Cloud Developing Badge"
            width="120"
            height="120"
            className="rounded-lg"
          />
        </a>
      </div>
    </div>
  );
};

export default Achievement;
