import { capabilityData } from "../utils/constant";
import CapabilityGroup from "./CapabilityGroup";

const CapabilitySections = () => {
	return (
		<section className="container py-16 md:py-20">
			{capabilityData.map((capability) => (
				<CapabilityGroup key={capability.id} capability={capability} />
			))}
		</section>
	);
};

export default CapabilitySections;
