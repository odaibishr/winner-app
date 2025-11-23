import React, { useEffect } from "react";
import { statsItems } from "../utils/constant";
import StatsItem from "./StatsItem";

const StatsSection = () => {
	useEffect(() => {
		const el = document.querySelector(".stats-animate");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("opacity-100", "translate-y-0");
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (el) observer.observe(el);
	}, []);

	return (
		<section className="container opacity-0 translate-y-6 transition-all duration-700 ease-out stats-animate">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12">
				{/* items */}

				{statsItems.map((item, index) => (
					<StatsItem key={index} item={item} />
				))}
			</div>
		</section>
	);
};

export default StatsSection;
