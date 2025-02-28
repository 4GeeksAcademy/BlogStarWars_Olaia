import React from "react";

import "../../styles/home.css";
import { People } from "./People.jsx";
import { Planets } from "./Planets.jsx";
import { Vehicles } from "./Vehicles.jsx";

export const Home = () => (
	
	<div className=" mt-5 ms-5">
		<People/>
		<Planets/>
		<Vehicles/>
	</div>
	
);
