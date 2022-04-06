import React, { useContext} from "react";
import Card from "../component/Card.js";
import { Context } from "../store/appContext.js";

const URL_PROFILE =
	"https://qph.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";

const URL_PLANET = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarZqv0qiFXGJD9w25Z3WIvoCHsUsPFvHwoA&usqp=CAU"
export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div>
			<div className="container-fluid ">
				<p className="text-danger display-4 ">Characters</p>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.people
						? store.people.map((value, index, people) => {
							return <Card key={index} value={value} index={index} category={"people"} people={people} image={URL_PROFILE}/>;
						})
						: ""}
				</div>
			</div>
			<div className="container-fluid ">
				<p className="text-danger display-4 ">Planets</p>
				<div className="row flex-row flex-nowrap overflow-auto">
					{store.planets
						? store.planets.map((value, index) => {
							return <Card key={index} value={value} index={index} category={"planets"} image={URL_PLANET}  />;
						})
						: ""}
				</div>
			</div>
		</div>
	);
};
