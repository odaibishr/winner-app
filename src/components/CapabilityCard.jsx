import React from "react";

const CapabilityCard = ({ icon, title, description }) => {
	return (
		<div className="group">
			<div
				className="flex flex-col gap-3 w-[320px] md:w-[350px] h-[126px] justify-center items-center py-5 px-6 bg-white rounded-4xl
			                transition-all duration-300 ease-out
			                group-hover:bg-secondary group-hover:scale-0.5"
			>
				<div
					className="flex items-center gap-2
				                transition-transform duration-300 ease-out
				                group-hover:-translate-y-2"
				>
					<img
						src={icon}
						alt={title}
						className="
							h-8 w-8
							transition-all duration-300 ease-out
							filter invert-50
							group-hover:invert group-hover:brightness-0 fill-white
						"
					/>

					<span
						className="text-secondary text-xl md:text-3xl
					                 transition-colors duration-300 ease-out
					                 group-hover:text-white"
					>
						{title}
					</span>
				</div>

				<p
					className="text-black/60 text-center text-md
				              transition-all duration-300 ease-out
				              group-hover:text-white/70 group-hover:text-sm"
				>
					{description}
				</p>
			</div>
		</div>
	);
};

export default CapabilityCard;
