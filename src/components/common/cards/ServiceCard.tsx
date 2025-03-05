import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  href: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  linkText,
  href,
  className = ""
}) => {
  return (
	<div className={`bg-neutral-100 rounded-3xl shadow-sm ${className}`}>
	  <div className="p-6 flex flex-col gap-3">
		<div className="flex items-center gap-4">
		  <div className="bg-gray-300 p-4 rounded-2xl">
			{icon}
		  </div>
		  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
		</div>
		<p className="text-gray-800">{description}</p>
		<Link href={href} className="text-black font-medium hover:underline pt-1">
		  {linkText}
		</Link>
	  </div>
	</div>
  );
};

export default ServiceCard;