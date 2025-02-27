import React from 'react';

interface ReviewCardProps {
  name: string;
  timeAgo: string;
  rating: number;
  comment: string;
  avatarLetter?: string;
  currentSlide?: number;
  totalSlides?: number;
  onSlideChange?: (index: number) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  timeAgo,
  rating,
  comment,
  avatarLetter = name.charAt(0),
  currentSlide = 4,
  totalSlides = 9,
  onSlideChange
}) => {
  return (
	<div className="bg-white rounded-lg p-6 max-w-md w-full h-80 relative overflow-hidden flex flex-col">
	  {/* Bottom curve */}
	  <div className="absolute -bottom-45 -left-30 w-64 h-64 bg-gray-100 rounded-full"></div>
	  
	  <div className="relative z-10 flex flex-col flex-grow">
		{/* Avatar and user info */}
		<div className="flex items-center mb-4">
		  <div className="bg-slate-400 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-medium mr-4">
			{avatarLetter}
		  </div>
		  <div>
			<h3 className="text-2xl font-medium text-gray-900">{name}</h3>
			<p className="text-gray-500">{timeAgo}</p>
		  </div>
		</div>
		
		{/* Rating stars */}
		<div className="flex mb-4">
		  {[...Array(5)].map((_, i) => (
			<svg 
			  key={i}
			  className="w-6 h-6 text-yellow-400 fill-current"
			  viewBox="0 0 24 24"
			>
			  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
			</svg>
		  ))}
		</div>
		
		{/* Review text - met vaste hoogte en overflow */}
		<div className="flex-grow overflow-y-auto mb-4">
		  <p className="text-xl text-gray-800">{comment}</p>
		</div>
	  </div>
	</div>
  );
};

export default ReviewCard;