import SectionHeader from "./SectionHeader";

const SupportWorkingHours = () => {
	return (
		<section className="py-10 md:py-20 section-border">
			<SectionHeader title="ساعات العمل" description="" />
			<div className="py-10 bg-primary/50 w-full md:h-[305px] flex justify-center items-center ">
				<div className="container flex flex-col md:flex-row items-center justify-between gap-16">
					<div className="space-y-6 mx-auto">
						<div className="flex items-center gap-3 bg-white px-6 py-2 rounded-2xl">
							<img src="clock.svg" alt="sleeping" className="w-10 h-10" />
							<h4 className="text-secondary text-lg md:text-2xl font-medium">
								الأحد - الخميس 9:00 ص - 6:00 م
							</h4>
						</div>
						<div className="flex items-center gap-3 bg-white px-6 py-2 rounded-2xl">
							<img src="sleeping.svg" alt="sleeping" className="w-10 h-10" />
							<h4 className="text-secondary text-lg md:text-2xl font-medium">
								الجمعة - السبت - مغلق
							</h4>
						</div>
					</div>
					<div className="mx-auto">
						<img src="/working-hours.png" alt="working-hours" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SupportWorkingHours;
