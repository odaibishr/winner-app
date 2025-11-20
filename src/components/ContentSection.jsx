import { sectionsData } from "../utils/constant";

const ContentSection = () => {
	return (
		<div className="green-gradient flex flex-col items-center justify-center  gap-10 rounded-[100px]">
			{sectionsData.map((content) => (
				<div key={content.id} className="text-center w-[70%]">
					<h2 className="text-primary text-4xl mt-13 font-medium">
						{content.id + " " + content.title}
					</h2>
					<p className="text-white text-3xl mt-12 mb-2 leading-relaxed">{content.content}</p>
					{content.items && (
						<ul className="flex flex-col gap-3 ">
							{content.items.map((item) => (
								<li key={item} className="text-white text-3xl mt-2 list-disc list-inside">
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
