import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MenuItem = ({ item }) => {
	const location = useLocation();
	return (
		<Link
			to={item.link}
			className={`text-primary text-xl font-medium hover:text-white transition-all duration-300 ease-in-out ${
				item.link === location.pathname ? "text-white" : ""
			}`}
		>
			{item.name}
		</Link>
	);
};

export default MenuItem;
