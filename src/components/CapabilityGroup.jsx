import CapabilityCard from "./CapabilityCard";

const CapabilityGroup = ({ capability }) => {
	return (
		<div className="flex flex-col items-center md:gap-8 gap-6 mb-20">
			<h1 className="text-primary md:text-5xl text-3xl underline mb-10">
				{capability.title}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
				{capability?.items?.map((item) => (
					<CapabilityCard
						key={item.id}
						title={item.title}
						icon={item.icon}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
};

export default CapabilityGroup;
