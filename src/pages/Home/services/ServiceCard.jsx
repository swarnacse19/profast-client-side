import React from 'react';

const ServiceCard = ({ service }) => {
    const {Icon, title, description} = service
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 text-center text-black hover:bg-lime-300">
      <div className="text-4xl mb-4 text-lime-700 flex justify-center">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;