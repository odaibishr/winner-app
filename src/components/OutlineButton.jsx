import {Link} from "react-router-dom";

const OutlineButton = ({icon, title, link}) => {
    return (
        <Link
            to={link}
            className="md:w-60 w-48 h-12 rounded-full border-2 border-primary md:icon-text-hover icon-text-hover flex items-center justify-center gap-2"
        >
            <img className="w-6 h-6" src={icon} alt="more-down" />
            <span className="text-white md:text-lg text-sm">{title}</span>
        </Link>
    );
}

export default OutlineButton;