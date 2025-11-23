import React from "react";

const About = () => {
	return (
		<main className="bg-black pt-40 md:pt-20 min-h-screen">
			<section className="container flex flex-col gap-2">
				<span className="text-white text-start text-[250px]">قصة</span>
				<span className="text-primary text-[400px] -translate-y-70">
					Winner
				</span>
				<div className="w-full flex items-center justify-center text-center text-white text-2xl leading-relaxed -translate-y-90">
					<p className="md:w-[70%]">
						بدأت رحلتنا برؤية بسيطة: إنشاء منصة تواصل اجتماعي تجمع بين الأصدقاء
						والعائلة في بيئة آمنة وممتعة، مع ميزات فريدة تجعل التواصل أكثر تعبيراً
						وإبداعاً.
					</p>
				</div>
			</section>
		</main>
	);
};

export default About;
