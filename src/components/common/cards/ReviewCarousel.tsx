import React, { useState } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  timeAgo: string;
  rating: number;
  comment: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewsPerSlide = 1; // Aantal reviews per slide
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  const handleNext = () => {
	setCurrentSlide((prev) => Math.min(prev + reviewsPerSlide, reviews.length - reviewsPerSlide));
  };

  const handlePrev = () => {
	setCurrentSlide((prev) => Math.max(prev - reviewsPerSlide, 0));
  };

  return (
	<div className="relative max-w-4xl mx-auto py-8">
	  {/* Container voor de reviews */}
	  <div className="space-y-6">
		{/* Use Framer Motion for animation */}
		<motion.div
		  key={currentSlide}
		  initial={{ opacity: 0, x: -100 }}
		  animate={{ opacity: 1, x: 0 }}
		  exit={{ opacity: 0, x: 100 }}
		  transition={{ duration: 0.5 }}
		>
		  {reviews.slice(currentSlide, currentSlide + reviewsPerSlide).map((review, index) => (
			<ReviewCard
			  key={index}
			  name={review.name}
			  timeAgo={review.timeAgo}
			  rating={review.rating}
			  comment={review.comment}
			  currentSlide={currentSlide}
			  totalSlides={totalSlides}
			  onSlideChange={setCurrentSlide}
			/>
		  ))}
		</motion.div>
	  </div>

	  {/* Navigatie pijlen */}
	  {reviews.length > reviewsPerSlide && (
		<>
		  <button
			onClick={handlePrev}
			disabled={currentSlide === 0}
			className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
			aria-label="Vorige review"
		  >
			<ChevronLeft className="h-6 w-6" />
		  </button>
		  <button
			onClick={handleNext}
			disabled={currentSlide + reviewsPerSlide >= reviews.length}
			className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
			aria-label="Volgende review"
		  >
			<ChevronRight className="h-6 w-6" />
		  </button>
		</>
	  )}

	  {/* Navigatie bolletjes */}
	  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
		{[...Array(totalSlides)].map((_, i) => (
		  <button
			key={i}
			onClick={() => setCurrentSlide(i)}
			className={`w-3 h-3 rounded-full ${
			  i === currentSlide ? "bg-gray-800" : "bg-gray-300"
			}`}
			aria-label={`Slide ${i + 1}`}
		  />
		))}
	  </div>
	</div>
  );
};

export default ReviewCarousel;