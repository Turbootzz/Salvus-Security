'use client';
import Button from "../common/buttons/Button";
import React from 'react'; 
import ValueProposition from "../common/cards/ValueProposition";
import ReviewCarousel from "../common/cards/ReviewCarousel";
import ReviewCard from "../common/cards/ReviewCard";

export default function Reviews() {
	const [currentSlide, setCurrentSlide] = React.useState(4);

	const reviews = [
		{
		  name: "Clarie Korteland",
		  timeAgo: "11 maanden geleden",
		  rating: 5,
		  comment: "Heel vriendelijk."
		},
		{
		  name: "Jan Janssen",
		  timeAgo: "3 maanden geleden",
		  rating: 5,
		  comment: "Professionele service. Alles ging probleemloos."
		},
		{
		  name: "Petra de Vries",
		  timeAgo: "2 maanden geleden",
		  rating: 4,
		  comment: "Goede service en stipt op tijd. Aanrader!"
		}
	  ];

  return (
	<section className="bg-background mt-13 mb-13">
	  <div className="container lg:container-lg">
		<h3 className="text-2xl font-bold mb-3">Samen met onze opdrachtgevers vormen wij een <span className="text-secondary">goedwerkend</span> team</h3>
		<p className="mb-7 leading-7">
		  Op Salvus Security kan je bouwen. Als opdrachtgever als je voor de
		  uitdaging staat om de veiligheid van uw object, gasten of medewerkers
		  te waarborgen.
		</p>
		<Button text="Offerte aanvragen &rarr;" onClick={() => alert("Klik!")} />
	  </div>
	  <ValueProposition />
	  <div className="flex justify-center p-8 bg-gray-100">
	  <ReviewCarousel reviews={reviews} />
	</div>
	</section>
  );
}
