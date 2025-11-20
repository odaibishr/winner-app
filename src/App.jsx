import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
		</Routes>
	);
}

export default App;
