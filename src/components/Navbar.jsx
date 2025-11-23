import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../utils/constant";
import MenuItem from "./MenuItem";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`w-full fixed top-0 left-0 right-0 z-50 ${
				isScrolled
					? " transition-all duration-300 ease-in-out bg-primary-300/20 backdrop-blur-2xl "
					: ""
			}`}
		>
			<div className={`flex container p-4  justify-between items-center`}>
				{/* Logo */}
				<Link
					to="/"
					className="w-[120px] h-12 flex items-center gap-2 group transition-all duration-300 ease-in-out cursor-pointer"
				>
					<div className="left-[58px] top-0 text-center justify-start text-amber-300 text-2xl md:text-3xl font-medium md:group-hover:hidden transition-all duration-300 ease-in-out md:group-hover:translate-x-2">
						Winner
					</div>
					<img
						className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] border border-orange-300 transition-all duration-300 ease-in-out md:group-hover:translate-x-2"
						src="./logo.svg"
						alt="logo"
					/>
				</Link>

				{/* Menu Items Desktop */}
				<div className="hidden lg:flex items-center gap-x-6">
					{menuItems.map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</div>

				{/* Buttons Desktop */}
				<div className="hidden lg:flex items-center gap-6">
					<div className="w-[180px] h-12 bg-linear-to-b from-yellow-700 to-yellow-950 rounded-[10px] icon-text-hover flex items-center justify-center gap-2">
						<img className="" src="./download.svg" alt="download" />
						<span className="text-white">تحميل التطبيق</span>
					</div>

					<Link
						to="/login"
						className="flex items-center gap-2 h-12 w-[180px] rounded-[10px] border-2 border-primary  icon-text-hover p-[2px] text-primary"
					>
						<div className="flex items-center gap-2 w-full h-full justify-center rounded-[8px]">
							<img src="./login.svg" alt="login" />
							<span>دخول الإدارة</span>
						</div>
					</Link>
				</div>

				{/* Button Menu */}
				<button
					className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 z-60"
					onClick={toggleMenu}
				>
					<span
						className={`block w-6 h-0.5 bg-amber-300 transition-all duration-300 ${
							isMenuOpen ? "-rotate-45 translate-y-1.5 " : ""
						}`}
					></span>
					<span
						className={`block w-6 h-0.5 bg-amber-300 transition-all duration-300 ${
							isMenuOpen ? "rotate-45 translate-y-1.5 hidden " : ""
						}`}
					></span>
				</button>

				{/* Overlay */}
				{isMenuOpen && (
					<div
						className="fixed inset-0 bg-black/50 bg-opacity-30 z-40 lg:hidden"
						onClick={() => setIsMenuOpen(false)}
					></div>
				)}

				{/* Navbar Mobile */}
				<div
					className={`lg:hidden fixed top-0 left-0 right-0 bg-[#9E8F7F] shadow-lg transition-all duration-300 ease-in-out z-50 ${
						isMenuOpen
							? "opacity-100 visible translate-y-0"
							: "opacity-0 invisible -translate-y-full"
					}`}
				>
					{/*  Logo Mobile */}
					<div className="flex justify-between items-center p-4 border-b border-yellow-700">
						<Link
							to="/"
							className="w-[120px] h-12 flex items-center gap-2 group transition-all duration-300 ease-in-out cursor-pointer"
							onClick={() => setIsMenuOpen(false)}
						>
							<div className="text-amber-300 text-3xl font-medium">Winner</div>
							<img
								className="w-12 h-12 rounded-[10px] border border-orange-300"
								src="./logo.svg"
								alt="logo"
							/>
						</Link>

						<button
							className="flex flex-col justify-center items-center w-10 h-10 space-y-1"
							onClick={toggleMenu}
						>
							<span className="block w-6 h-0.5 bg-amber-300 rotate-45 translate-y-1.5"></span>
							{/* <span className="block w-6 h-0.5 bg-amber-300 -rotate-45 -translate-y-1.5"></span> */}
						</button>
					</div>

					<div className="flex flex-col p-4 space-y-4 max-h-[80vh] overflow-y-auto">
						{/* Menu Items Mobile */}
						{menuItems.map((item, index) => (
							<Link
								key={index}
								to={item.link}
								className="text-primary text-xl font-medium py-3 px-4 hover:bg-yellow-700 hover:text-white rounded-[8px] transition-all duration-300 text-center"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}

						{/* Buttons Mobile */}
						<div className="flex flex-col gap-4 mt-4">
							<div className="w-full h-12 bg-linear-to-b from-yellow-700 to-yellow-950 rounded-[10px] icon-text-hover flex items-center justify-center gap-2">
								<img className="" src="./download.svg" alt="download" />
								<span className="text-white">تحميل التطبيق</span>
							</div>

							<Link
								to="/login"
								className="flex items-center gap-2 h-12 w-full rounded-[10px] border-2 border-primary icon-text-hover p-[2px] text-primary"
								onClick={() => setIsMenuOpen(false)}
							>
								<div className="flex items-center gap-2 w-full h-full justify-center rounded-[8px]">
									<img src="./login.svg" alt="login" />
									<span>دخول الإدارة</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
