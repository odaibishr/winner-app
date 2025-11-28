import PrimaryButton from "./PrimaryButton";
import { useLocation } from "react-router-dom";

const ContactSection = () => {
	const location = useLocation();
	return (
		<div className="md:py-12 py-6 flex flex-col items-center text-center md:gap-11 gap-6">
			<h2 className="text-primary md:text-4xl text-2xl font-medium">
				هل لديك أسئلة حول{" "}
				{location.pathname === "/privacy-policy"
					? "سياسة الخصوصية"
					: "شروط الخدمة"}
				؟
			</h2>
			<p className="text-white md:text-3xl text-xl font-medium">
				فريقنا جاهز للإجابة على جميع استفساراتك
			</p>

			<div className="space-y-4">
				<PrimaryButton
					title="تواصل معنا"
					icon="./light-connect.svg"
					link="/contact"
				/>
				{location.pathname === "/privacy-policy" ? (
					<PrimaryButton
						title="شروط الخدمة"
						icon="./shield-lock.svg"
						link="/terms-of-service"
					/>
				) : (
					<PrimaryButton
						title="سياسة الخصوصية"
						icon="./shield-lock.svg"
						link="/privacy-policy"
					/>
				)}
			</div>
		</div>
	);
};

export default ContactSection;
