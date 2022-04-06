import React from "react";
import { Link } from "react-router-dom";


const URL_IMG =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/320px-Star_wars2.svg.png";
	
export const Navbar = () => {
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
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favorites
				</button>
				<ul
					className="dropdown-menu"
					aria-labelledby="dropdownMenuButton1"></ul>
			</div>
		</nav>
	);
};
