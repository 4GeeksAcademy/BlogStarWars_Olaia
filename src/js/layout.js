import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./component/home.jsx";
import { Demo } from "./views/demo.js";
import { Single } from "./component/single.jsx";
import { PlanetsJumbotron } from "./component/PlanetsJumbotron.jsx";
import { VehicleJumbotron } from "./component/VehicleJumbotron.jsx";
import injectContext from "./store/appContext.js";
import { Navbar } from "./component/navbar.jsx"
import { Footer } from "./component/footer.js";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/PlanetsJumbotron/:theid" element={<PlanetsJumbotron />} />
						<Route path="/VehicleJumbotron/:theid" element={<VehicleJumbotron />} />
						<Route path="*" element={<Home/>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);