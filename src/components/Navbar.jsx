import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../data/constant.js";
import MenuItem from "./MenuItem";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const location = useLocation();

	const handleCloseMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		() => {
			handleCloseMenu();
		};
	}, [location, isMenuOpen]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	const toggleMenu = useCallback(() => {
		if (!isAnimating) {
			setIsAnimating(true);
			setIsMenuOpen((prev) => !prev);
			setTimeout(() => setIsAnimating(false), 300);
		}
	}, [isAnimating]);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setIsScrolled(window.scrollY > 10);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape" && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [isMenuOpen]);

	return (
		<>
			<header
				className={`w-full container fixed top-0 left-0 right-0 z-50 ${
					isScrolled || isMenuOpen
						? "md:mt-2 md:rounded-full md:border max-sm:border-b border-primary/50 transition-all duration-300 ease-in-out bg-black backdrop-blur-2xl "
						: ""
				}`}
			>
				<div className="container mx-auto">
					<div
						className={`flex p-4 justify-between items-center transition-all duration-300
              ${isScrolled ? "py-3" : "py-4"}`}
					>
						{/* Logo */}
						<Link
							to="/"
							className="flex items-center gap-2 group transition-all duration-300 ease-out cursor-pointer z-50"
							onClick={() => setIsMenuOpen(false)}
						>
							<span
								className="text-amber-300 text-2xl md:text-3xl font-medium 
                transition-all duration-300 ease-out group-hover:text-primary
                md:group-hover:opacity-0 md:group-hover:-translate-x-4"
							>
								Winner
							</span>
							<img
								className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] border border-orange-300 
                  transition-all duration-300 ease-out 
                  group-hover:scale-110 group-hover:border-orange-200
                  md:group-hover:translate-x-16"
								src="/logo.svg"
								alt="Winner Logo"
							/>
						</Link>

						{/* Menu Items Desktop */}
						<nav className="hidden lg:flex items-center gap-x-6">
							{menuItems.map((item, index) => (
								<div
									key={index}
									className="transform transition-all duration-300 hover:-translate-y-0.5"
									style={{ transitionDelay: `${index * 50}ms` }}
								>
									<MenuItem item={item} />
								</div>
							))}
						</nav>

						{/* Buttons Desktop */}
						<div className="hidden lg:flex items-center gap-4">
							<Link
								to="/login"
								className="group relative w-[180px] h-12 green-gradient 
                  rounded-[10px] flex items-center justify-center gap-2 overflow-hidden
                  transition-all duration-300 
                 "
							>
								<img
									className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
									src="/download.svg"
									alt=""
								/>
								<span className="text-white font-medium">تحميل التطبيق</span>
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center
                rounded-full transition-all duration-300 ease-out
                hover:bg-primary/10 active:scale-95"
							onClick={toggleMenu}
							aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
							aria-expanded={isMenuOpen}
						>
							<div className="relative w-6 h-6">
								<Menu
									className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300
                    ${
											isMenuOpen
												? "opacity-0 rotate-180 scale-50"
												: "opacity-100 rotate-0 scale-100"
										}`}
								/>
								<X
									className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300
                    ${
											isMenuOpen
												? "opacity-100 rotate-0 scale-100"
												: "opacity-0 -rotate-180 scale-50"
										}`}
								/>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden absolute top-full left-0 right-0 
            bg-black/95 backdrop-blur-xl border-b border-primary/20
            transition-all duration-500 ease-out origin-top
            ${
							isMenuOpen
								? "opacity-100 visible translate-y-0 scale-y-100"
								: "opacity-0 invisible -translate-y-4 scale-y-95"
						}`}
					style={{
						maxHeight: isMenuOpen ? "calc(100vh - 80px)" : "0",
						transitionProperty: "all, max-height",
					}}
				>
					<nav className="container mx-auto px-4 py-6 overflow-y-auto max-h-[calc(100vh-100px)]">
						{/* Menu Items */}
						<div className="space-y-2">
							{menuItems.map((item, index) => (
								<Link
									to={item.link}
									key={index}
									className={`transform transition-all duration-500 ease-out
                    ${
											isMenuOpen
												? "opacity-100 translate-y-0 translate-x-0"
												: "opacity-0 -translate-y-4 translate-x-4"
										}`}
									style={{
										transitionDelay: isMenuOpen
											? `${index * 80 + 100}ms`
											: "0ms",
									}}
									onClick={() => setIsMenuOpen(false)}
								>
									<div
										className={`block p-4 rounded-xl mb-2 bg-white/5 hover:bg-primary/10 
                    border border-transparent hover:border-primary/30
                    transition-all duration-300 active:scale-98 cursor-pointer ${
											location.pathname === item.link
												? "text-white"
												: "text-primary"
										}`}
									>
										{item.name}
									</div>
								</Link>
							))}
						</div>

						{/* Divider */}
						<div
							className={`my-6 h-px bg-linear-gradient-to-r from-transparent via-primary/30 to-transparent
                transition-all duration-700 ease-out
                ${
									isMenuOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
								}`}
							style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
						/>

						{/* Buttons */}
						<div className="space-y-4">
							<Link
								to="/login"
								className={`group relative w-full h-14 green-gradient
                  rounded-xl flex items-center justify-center gap-3 overflow-hidden
                  transition-all duration-500 ease-out active:scale-98
                  ${
										isMenuOpen
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-4"
									}`}
								style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
							>
								<img
									className="w-6 h-6 transition-transform duration-300 group-hover:bounce"
									src="/download.svg"
									alt=""
								/>
								<span className="text-white font-semibold text-lg">
									تحميل التطبيق
								</span>
							</Link>
						</div>
					</nav>
				</div>
			</header>

			{/* Overlay */}
			<div
				className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden
          transition-all duration-500 ease-out
          ${
						isMenuOpen
							? "opacity-100 visible"
							: "opacity-0 invisible pointer-events-none"
					}`}
				onClick={() => setIsMenuOpen(false)}
				aria-hidden="true"
			/>
		</>
	);
};

export default Navbar;
