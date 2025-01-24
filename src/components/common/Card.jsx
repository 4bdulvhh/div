import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full transition-all duration-300 hover:shadow-lg">
      {children}
    </div>
  );
};

export default Card;