import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route path="/terms-of-service" element={<TermsOfService />} />
			<Route path="/about" element={<About />} />
			<Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
