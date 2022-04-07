import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const URL_IMG =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/320px-Star_wars2.svg.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const toggleOpen = () => setDropdown(!dropdown);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="img-fluid"
						alt="Responsive image"
						src={URL_IMG}
						width="160"
					/>
				</span>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle mx-5"
					type="button"
					id="dropdownMenuButton1"
					aria-expanded="false"
					onClick={toggleOpen}>
					Favorites
				</button>
				<ul
					className={`dropdown-menu m-0 p-0 ${dropdown ? "show" : ""} `}
					aria-labelledby="dropdownMenuButton1">
					 {!store.favorites.length ? (<li className="list-group-item text-center"> *Empty* </li>) : (store.favorites.map(value => {
						return (
							<li className="list-group-item justify-content-between"
								key={`${value.properties.name}${value._id}`} value={value}>
								{value.properties.name}{" "}
								<button  className="fas fa-times" 
								onClick={() => actions.deleteFavorites(value.category, value.properties)}
								/>		
							</li>
						);
					}))}
				</ul>
			</div>
		</nav>
	);
};

