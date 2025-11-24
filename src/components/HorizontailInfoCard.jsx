const HorizontailInfoCard = ({ index, title, text, image }) => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-6">
			<div
				className={`md:w-[40%] rounded-4xl overflow-hidden ${
					index % 2 === 0 ? "order-1 md:order-2" : "order-2 md:order-1"
				}`}
			>
				<img
					src={image}
					alt="vision"
					className="w-full h-full transition-transform duration-300 hover:scale-130"
				/>
			</div>

			<div
				className={`${
					index % 2 === 0 ? "order-1 md:order-1" : "order-2 md:order-1"
				} text-center md:w-[60%] my-auto`}
			>
				<h2 className="text-primary md:text-5xl text-3xl">{title}</h2>
				<h4 className="text-white md:text-3xl text-xl leading-relaxed md:mt-6 mt-4">
					{text}
				</h4>
			</div>
		</div>
	);
};

export default HorizontailInfoCard;
