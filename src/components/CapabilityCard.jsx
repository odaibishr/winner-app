import React from "react";

const CapabilityCard = ({ icon, title, description }) => {
	return (
		<div className="flex flex-col gap-2 py-4 px-6 bg-white rounded-4xl">
			<div className="flex items-center gap-2">
				<img src={icon} alt="chat" className="invert-50 h-8 w-8" />
				<span className="text-secondary text-2xl md:text-3xl">{title}</span>
			</div>
			<p className="text-black/50">{description}</p>
		</div>
	);
};

export default CapabilityCard;
