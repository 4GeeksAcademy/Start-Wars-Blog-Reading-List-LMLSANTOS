import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/StarWarsLogo.png";

export const Navbar = () => {
	return (
		

	<nav className="navbar navbar-light bg-light ps-5 pe-5">
		<div className="container-fluid">
		  	<span className="navbar-brand ms-2">
				<img src={starWarsLogo} alt="" width="120" height="57" className="d-inline-block align-text-top me-4"/>	
		  	</span>
		  	<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</div>
	</nav>
	);
};
