const SectionHeader = ({ title, description }) => {
	return (
		<div className="md:h-[220px] h-[150px] flex text-center flex-col gap-5 items-center justify-center green-gradient ">
			<h2 className="text-primary text-4xl max-sm:text-2xl">{title}</h2>
			<p className="text-white text-2xl max-sm:text-lg">{description}</p>
		</div>
	);
};

export default SectionHeader;
