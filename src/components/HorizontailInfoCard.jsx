const HorizontailInfoCard = ({
	index,
	title,
	text,
	image,
	isDetailed = false,
	items = null,
}) => {
	const isEven = index % 2 === 0;

	return (
		<div className="flex flex-col md:flex-row group items-center justify-between gap-20">
			<div
				className={`md:w-[40%] rounded-4xl overflow-hidden
          ${isEven ? "md:order-2" : "md:order-1"}
          order-1
        `}
			>
				<img
					src={image}
					alt={title}
					className="w-full h-full transition-transform duration-300 group-hover:scale-130"
				/>
			</div>

			<div
				className={`md:w-[60%] my-auto
          ${isEven ? "md:order-1" : "md:order-2"}
          order-2
          ${isDetailed ? "text-right" : "text-center"}
        `}
			>
				<h2 className="text-primary md:text-5xl text-3xl">{title}</h2>
				<h4 className="text-white md:text-3xl text-xl  leading-relaxed md:mt-6 mt-4">
					{text}
				</h4>

				{isDetailed && items && (
					<ul className="list-disc text-white mr-6 md:text-2xl text-xl leading-relaxed md:mt-6 mt-4">
						{items.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default HorizontailInfoCard;
