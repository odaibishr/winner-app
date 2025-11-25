import { capabilityData } from "../utils/constant";
import CapabilityGroup from "./CapabilityGroup";

const CapabilitySections = () => {
	return (
		<section className="py-16 md:py-20 section-border">
			<div className="container">
				{capabilityData.map((capability) => (
					<CapabilityGroup key={capability.id} capability={capability} />
				))}
			</div>
		</section>
	);
};

export default CapabilitySections;
