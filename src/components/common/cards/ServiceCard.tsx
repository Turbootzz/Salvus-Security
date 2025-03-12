'use client';

import React, { useState } from 'react';
import ServiceModal from '../modals/ServiceModal';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  extendedDescription?: string;
  linkText: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  extendedDescription,
  linkText,
  className = ""
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functie om de beschrijving te verkorten
  const shortenDescription = (text: string) => {
    const firstSentence = text.split('\n')[0];
    return firstSentence;
  };

  return (
    <>
      <div className={`bg-neutral-100 rounded-3xl shadow-sm h-full ${className}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-4">
            <div className="bg-gray-300 p-4 rounded-2xl">
              {icon}
            </div>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-800 flex-grow mt-3">{shortenDescription(description)}</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-black font-medium hover:underline mt-3 text-left"
          >
            {linkText}
          </button>
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={extendedDescription || description}
        icon={icon}
      />
    </>
  );
};

export default ServiceCard;