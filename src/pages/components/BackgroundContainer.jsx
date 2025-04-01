import React from 'react';

const BackgroundContainer = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen sm:h-auto fixed w-screen z-[-1]"
      style={{ backgroundImage: 'url(/Portfolio_Website/images/Background.jpg)' }}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
