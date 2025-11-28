import { Link } from "react-router-dom";

const PrimaryButton = ({ title, icon, link }) => {
	return (
		<Link
			to={`${link}`}
			className="md:w-60 w-48 h-12 rounded-[100px] bg-primary/20 backdrop-blur-2xl hover:scale-95 transition-all duration-300 flex items-center justify-center gap-2 [box-shadow:inset_-15px_15px_15px_rgba(255,255,255,0.20),inset_15px_-15px_15px_rgba(193,166,78,0.20)]"
		>
			<img src={icon} alt="download" className="w-8 h-8" />
			<span className="text-white md:text-lg text-sm">{title}</span>
		</Link>
	);
};

export default PrimaryButton;
