import { sectionsData } from "../utils/constant";

const ContentSection = () => {
	return (
		<div className="green-gradient md:py-13 px-10 py-10 flex flex-col items-center justify-center  gap-10 rounded-[100px]">
			<div className="flex flex-col items-center gap-10">
				{sectionsData.map((content) => (
					<div key={content.id} className="text-center md:w-[70%] w-[90%]">
						<h2 className="text-primary md:text-4xl text-2xl md:mt-13 mt-10 font-medium">
							{content.id + ". " + content.title}
						</h2>
						<p className="text-white md:text-3xl text-xl md:mt-12 mt-10 mb-2 leading-relaxed">
							{content.content}
						</p>
						{content.items && (
							<ul className="flex flex-col gap-3 ">
								{content.items.map((item) => (
									<li
										key={item}
										className="text-white md:text-3xl text-xl md:mt-2 mt-1 list-disc list-inside"
									>
										{item}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
			<div className="group w-full flex items-center justify-center">
				<div className="w-[80%] h-20 p-2 md:group-hover:w-[50%] cursor-pointer transition-all duration-300 ease-in-out  rounded-[20px] flex items-center justify-center md:gap-6 gap-3 bg-primary/20 backdrop-blur-2xl [box-shadow:inset_-15px_15px_15px_rgba(255,255,255,0.20),inset_15px_-15px_15px_rgba(193,166,78,0.20)]">
					<img
						src="./smartphone-update.svg"
						alt="smartphone-update"
						className=""
					/>
					<span className="text-white md:text-3xl text-xl leading-relaxed">
						آخر تحديث: 19/11/2025
					</span>
				</div>
			</div>
		</div>
	);
};

export default ContentSection;
