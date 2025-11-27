import { Link } from "react-router-dom";

const OutlineButton = ({ icon, title, link }) => {
	return (
		<Link
			to={link}
			className="md:w-60 w-48 h-12 rounded-full border-2 border-primary group hover:bg-primary hover:text-black transition-all duration-70 text-white flex items-center justify-center gap-2"
		>
			<img
				className="w-6 h-6 invert-100 brightness-0 group-hover:invert-0 group-hover:brightness-0"
				src={icon}
				alt="more-down"
			/>
			<span className="md:text-lg text-sm">{title}</span>
		</Link>
	);
};

export default OutlineButton;
