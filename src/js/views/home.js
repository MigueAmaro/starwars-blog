import React, { useContext} from "react";
import Card from "../component/Card.js";
import { Context } from "../store/appContext.js";

const URL_PROFILE =
	"https://qph.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";

const URL_PLANET = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarZqv0qiFXGJD9w25Z3WIvoCHsUsPFvHwoA&usqp=CAU";

const URL_VEHICLES = "https://www.freeiconspng.com/uploads/spaceship-png-icon-0.png";
export const Home = () => {
	const { store } = useContext(Context);
	return (
		<>
			<div className="container">
				<p className="text-danger display-4 ">Characters</p>
				<div className="showcase-list">
					{store.people
						? store.people.map((value) => {
							return <Card key={value._id} value={value} nature="people"/>;
						})
						: ""}
				</div>
                <p className="text-danger display-4 ">Planets</p>
                <div className="showcase-list">
					{store.planets
						? store.planets.map((value) => {
							return <Card key={value._id} value={value} nature="planets"/>;
						})
						: ""}
				</div>
                <p className="text-danger display-4 ">Vehicles</p>
                <div className="showcase-list">
					{store.vehicles
						? store.vehicles.map((value) => {
							return <Card key={value._id} value={value} nature="vehicles"/>;
						})
						: ""}
				</div>
			</div> 
		</>
	);
};