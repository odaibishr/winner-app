import React from "react";

const FeaturedCard = ({
    icon,
	title,
	description,
}) => {
	return (
		<div className="w-[300px] h-[300px] p-6 bg-white flex flex-col items-center justify-center gap-4 rounded-4xl border-2 border-black shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
			<img
				src={icon}
				alt="users-group"
				className="w-16 h-16 invert-50 fill-amber-300 "
			/>

			<h3 className="md:text-2xl text-xl font-medium text-black">{title}</h3>

			<p className="text-md leading-relaxed text-black/60 text-center">
				{description}
			</p>
		</div>
	);
};

export default FeaturedCard;
