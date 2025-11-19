import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
	return (
		<Link to={item.link} className="text-primary text-xl font-medium hover:text-white transition-all duration-300 ease-in-out">
			{item.name}
		</Link>
	);
};

export default MenuItem;
