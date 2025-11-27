const ContactFormCard = ({title, icon, content}) => {
    return (
        <div className="bg-white w-full py-3 rounded-xl text-center space-y-2">
            <div className="flex items-center justify-center gap-1">
                <img src={icon} alt="email icon"/>
                <span className="text-secondary font-medium text-lg md:text-xl">{title}</span>
            </div>
            <p className="text-black/50 text-md md:text-lg">{content}</p>
        </div>
    );
}

export default ContactFormCard;