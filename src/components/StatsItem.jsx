import React from "react";

const StatsItem = ({ item }) => {
	return (
		<div className="flex flex-col items-center group gap-2 justify-center p-7 rounded-2xl cursor-pointer bg-primary-300/20 backdrop-blur-2xl [box-shadow:inset_-15px_15px_15px_rgba(255,255,255,0.20),inset_15px_-15px_15px_rgba(193,166,78,0.20)]">
			<img
				className="w-10 h-10 md:group-hover:-translate-y-2 transition-all duration-300 ease-in-out"
				src={item.icon}
				alt="user-speak"
			/>
			<span className="text-primary md:text-3xl text-xl font-medium">
				{item.title}
			</span>
			<span className="text-white md:text-2xl text-lg leading-relaxed">
				{item.description}
			</span>
		</div>
	);
};

export default StatsItem;
