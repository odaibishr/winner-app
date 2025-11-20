import { sectionsData } from "../utils/constant";

const ContentSection = () => {
	return (
		<div className="green-gradient md:py-13 py-10 flex flex-col items-center justify-center  gap-10 rounded-[100px]">
			{sectionsData.map((content) => (
				<div key={content.id} className="text-center md:w-[70%] w-[90%]">
					<h2 className="text-primary md:text-4xl text-2xl md:mt-13 mt-10 font-medium">
						{content.id + " " + content.title}
					</h2>
					<p className="text-white md:text-3xl text-xl md:mt-12 mt-10 mb-2 leading-relaxed">{content.content}</p>
					{content.items && (
						<ul className="flex flex-col gap-3 ">
							{content.items.map((item) => (
								<li key={item} className="text-white md:text-3xl text-xl md:mt-2 mt-1 list-disc list-inside">
									{item}
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
};

export default ContentSection;
