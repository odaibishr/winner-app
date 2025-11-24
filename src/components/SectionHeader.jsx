const SectionHeader = ({ title, description }) => {
	return (
		<div className="md:h-[220px] h-[150px] flex text-center flex-col gap-5 items-center justify-center">
			<h2 className="text-primary md:text-5xl text-4xl">{title}</h2>
			<p className="text-white md:text-3xl text-xl">{description}</p>
		</div>
	);
};

export default SectionHeader;
