import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
	return (
		<div className="md:py-12 py-6 flex flex-col items-center text-center">
			<h2 className="text-primary md:text-4xl text-2xl font-medium">
				هل لديك أسئلة حول سياسة الخصوصية؟
			</h2>
			<p className="text-white md:text-3xl text-xl font-medium md:mt-11 mt-6">
				فريقنا جاهز للإجابة على جميع استفساراتك
			</p>

			<Link
				to="/contact"
				className="h-12 w-52 mt-12 flex items-center gap-2 icon-text-hover cursor-pointer bg-primary/20 backdrop-blur-2xl md:icon-text-hover rounded-full justify-center [box-shadow:inset_-15px_15px_15px_rgba(255,255,255,0.20),inset_15px_-15px_15px_rgba(193,166,78,0.20)]"
			>
				<img src="./light-connect.svg" alt="light-connect" className="w-10 h-10" />
				<span className="text-white md:text-2xl text-xl">تواصل معنا</span>
			</Link>
		</div>
	);
};

export default ContactSection;
