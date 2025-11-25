import { Link } from "react-router-dom";

const PrimaryButton = ({ title, link }) => {
	return (
		<Link
			to={`/${link}`}
			className="md:w-60 w-48 h-12 rounded-[100px] bg-primary/20 backdrop-blur-2xl md:icon-text-hover flex items-center justify-center gap-2 [box-shadow:inset_-15px_15px_15px_rgba(255,255,255,0.20),inset_15px_-15px_15px_rgba(193,166,78,0.20)]"
		>
			<img src="./download.svg" alt="download" className="w-5 h-5" />
			<span className="text-white md:text-lg text-sm">{title}</span>
		</Link>
	);
};

export default PrimaryButton;
