import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
	return (
		<Link to={item.link} className="text-primary text-xl font-medium hover:text-white">
			{item.name}
		</Link>
	);
};

export default MenuItem;
