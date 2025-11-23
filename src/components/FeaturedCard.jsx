import React from "react";

const FeaturedCard = () => {
	return (
		<div className="w-[300px] h-[300px] bg-white flex flex-col items-center justify-center gap-4 rounded-4xl border-3 border-black">
			<img
				src="./users-group.svg"
				alt="users-group"
				className="w-16 h-16 fill-black"
			/>
		</div>
	);
};

export default FeaturedCard;
