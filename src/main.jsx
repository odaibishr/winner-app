import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollToTop behavior="smooth" />
			<Navbar />
			<App />
		</BrowserRouter>
	</StrictMode>
);
