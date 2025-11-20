import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className=" py-20 container flex items-center justify-center">
			<div className="w-full md:h-96 flex flex-col justify-between  py-20 md:pt-30 md:px-20 px-10 bg-linear-to-b from-[#9E7900] to-[#382B00] rounded-[40px] ">
				<div className="w-full h-full text-center md:text-right flex flex-col md:flex-row gap-10 md:gap-0">
					<div className="flex flex-col items-center md:items-start">
						<Link
							to="/"
							className="md:w-[120px] h-12 flex items-center gap-2 cursor-pointer"
						>
							<div className="left-[58px] top-0 text-center justify-start text-amber-300 text-3xl md:text-3xl font-medium">
								Winner
							</div>
							<img
								className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] border border-orange-300"
								src="./logo.svg"
								alt="logo"
							/>
						</Link>

						<p className="text-lg md:w-[70%] w-full text-white leading-relaxed mt-4">
							تطبيق التواصل الاجتماعي الأول في المنطقة. تواصل مع الأصدقاء، أرسل
							الهدايا، وانضم للغرف التفاعلية.
						</p>
					</div>
					<div className="md:w-[50%] w-full flex flex-col md:flex-row justify-between md:space-x-10 space-y-10">
						<div className="flex flex-col gap-4">
							<h2 className="text-primary text-3xl font-medium">الــدعم</h2>
							<div className="flex flex-col md:gap-3 gap-2">
								<Link to="/support" className="text-white md:text-lg text-md">
									سياسة الخصوصية
								</Link>
								<Link to="/support" className="text-white md:text-lg text-md">
									شروط الاستخدام
								</Link>
								<Link to="/support" className="text-white md:text-lg text-md">
									مركز المساعدة
								</Link>
							</div>
						</div>
						<div className="flex flex-col items-center md:items-start gap-4">
							<h2 className="text-primary text-3xl font-medium">تـــابعنا</h2>
							<div className="flex items-center gap-4">
								<Link to="/support">
									<img src="./facebook.svg" alt="facebook" />
								</Link>
								<Link to="/support">
									<img src="./twitter.svg" alt="twitter" />
								</Link>
								<Link to="/support">
									<img src="./instagram.svg" alt="instagram" />
								</Link>
								<Link to="/support">
									<img src="./youtube.svg" alt="youtube" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full mt-10 flex flex-col md:flex-row  justify-between gap-4">
					<h2 className="text-white md:w-[50%] w-full text-center md:text-right">
						Winner © 2025. جميع الحقوق محفوظة.
					</h2>
					<h2 className="text-white md:w-[41%] w-full text-center md:text-right">
						صُنع بـ🤍 من فــــريـــــق أســـامة الــشرعبي
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Footer;
