// components/ValueProposition.tsx
import React from "react";

interface ValueItemProps {
  title: string;
  description: string;
  iconColor: string;
}

const ValueItem: React.FC<ValueItemProps> = ({
  title,
  description,
  iconColor,
}) => {
  return (
	<div className="flex flex-col items-center text-center mb-16 max-w-lg mx-auto px-4">
	  <div
		className={`rounded-full ${iconColor} w-24 h-24 flex items-center justify-center mb-6`}
	  >
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  className="h-12 w-12 text-white"
		  fill="none"
		  viewBox="0 0 24 24"
		  stroke="currentColor"
		>
		  <path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M5 13l4 4L19 7"
		  />
		</svg>
	  </div>
	  <h2 className="text-3xl font-bold text-navy-900 mb-4">{title}</h2>
	  <p className="text-xl text-gray-800">{description}</p>
	</div>
  );
};

const ValueProposition: React.FC = () => {
  return (
	<>
	  <div className="w-full bg-gray-100 pt-12 pb-1 mb-8">
		<div className="container mx-auto">
		  <ValueItem
			title="Verantwoordelijk"
			description="Wij nemen eigenaarschap voor veiligheid en beveiliging."
			iconColor="bg-blue-500"
		  />
		</div>
	  </div>
	  <div className="w-full bg-gray-100 pt-12 pb-1 mb-8">
		<div className="container mx-auto">
		  <ValueItem
			title="Betrouwbaar"
			description="Altijd betrouwbaar door hoogwaardige en eerlijke diensten."
			iconColor="bg-gray_c"
		  />
		</div>
	  </div>
	</>
  );
};

export default ValueProposition;
