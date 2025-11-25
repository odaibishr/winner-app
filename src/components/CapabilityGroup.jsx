import CapabilityCard from "./CapabilityCard";

const CapabilityGroup = ({ capabliityTitle }) => {
	return (
		<div className="flex flex-col items-center md:gap-8 gap-6">
			<h1 className="text-primary md:text-5xl text-3xl">{capabliityTitle}</h1>
			<div className="grid grid-cols-1 md:grid-cols-3">
				<CapabilityCard
					icon="/chat.svg"
					title="المحادثات الفورية"
					descraption=" تواصل مع الأصدقاء في الوقت الفعلي"
				/>
			</div>
		</div>
	);
};

export default CapabilityGroup;
