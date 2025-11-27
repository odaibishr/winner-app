import { Link } from "react-router-dom";

const SupportContactCard = ({ contact }) => {
	return (
		<div className="group">
			<div className="bg-white border-2 md:group-hover:scale-105 md:group-hover:translate-y-6 transition-all duration-200 border-black h-[350px] w-[350px] py-3 px-3 text-center flex flex-col items-center justify-center gap-4 rounded-4xl">
				<img src={contact.icon} alt="WhatsApp" className="w-16 h-16" />
				<h2 className="text-xl md:text-3xl font-medium">{contact.title}</h2>
				<p className="text-black/50 md:text-lg text-md">
					{contact.description}
				</p>
				<Link
					className="md:w-[70%] flex items-center justify-center gap-2 bg-[#CECCC7] px-6 py-2 rounded-full"
					to={contact.button.link}
				>
					<img
						src={contact.button.icon}
						alt="WhatsApp"
						className="w-6 h-6 invert-0 brightness-0"
					/>
					<span>{contact.button.text}</span>
				</Link>
			</div>
		</div>
	);
};

export default SupportContactCard;
