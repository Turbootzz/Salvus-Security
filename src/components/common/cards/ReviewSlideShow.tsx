import { useState, useEffect } from "react";
import { SlideShowButton } from "@/components/common/buttons/SlideShowButton";
import { ReviewCard, ReviewCardContent } from "@/components/common/cards/ReviewCard";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  { name: "John Doe", text: "Geweldige service en snelle levering!", rating: 5 },
  { name: "Jane Smith", text: "Zeer tevreden met mijn aankoop, topkwaliteit!", rating: 4 },
  { name: "Mark Johnson", text: "Klantenservice was super behulpzaam!", rating: 5 },
];

export default function ReviewSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
	const interval = setInterval(() => {
	  setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
	}, 5000);
	return () => clearInterval(interval);
  }, []);

  const prevReview = () => setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  const nextReview = () => setIndex((prevIndex) => (prevIndex + 1) % reviews.length);

  return (
	<div className="flex flex-col items-center p-6">
	  <ReviewCard className="w-full max-w-lg text-center p-6 shadow-lg">
		<ReviewCardContent>
		  <p className="text-xl font-semibold">&quot;{reviews[index].text}&quot;</p>
		  <p className="mt-2 text-gray-500">- {reviews[index].name}</p>
		  <div className="flex justify-center mt-2">
			{Array.from({ length: 5 }).map((_, i) => (
			  <Star key={i} className={i < reviews[index].rating ? "text-yellow-500" : "text-gray-300"} />
			))}
		  </div>
		</ReviewCardContent>
	  </ReviewCard>
	  <div className="flex gap-4 mt-4">
		<SlideShowButton onClick={prevReview} variant="outline">
		  <ChevronLeft />
		</SlideShowButton>
		<SlideShowButton onClick={nextReview} variant="outline">
		  <ChevronRight />
		</SlideShowButton>
	  </div>
	</div>
  );
}
