import React,{useContext} from "react";

import { useNavigate } from "react-router-dom";

import starWarsLogo from "../../img/StarWarsLogo.png";
import { Context } from "../store/appContext";

import "../../styles/navbar.css";

export const Navbar = () => {
	
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();
	
	const whoam_i = (type, id)=> {
		if (type ==="character"){
			navigate("/onecharacter/" + id);
		} else if (type ==="planet") {
			navigate("/oneplanet/" + id);
		} else if (type ==="vehicle") {
			navigate("/onevehicle/" + id);
		}
	}

	return (
		
	<nav className="navbar navbar-light bg-light ps-5 pe-5">
		<div className="container-fluid">
		  	<span className="navbar-brand ms-2">
				<img src={starWarsLogo} alt="" width="120" height="57" className="d-inline-block align-text-top me-4"/>	
		  	</span>
		  	
			<div class="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="dropdownMenuClickableInside" aria-expanded="false">
					Favorites <span className="badge text-bg-primary">{store.favorite.length}</span> 
				</button>
				<ul className="dropdown-menu">
					{store.favorite.map((fav, index) => {
						return(
							<li key={index}>
								
								<div className="dropdown-item d-flex justify-content-between" href="#" >
									<div onClick={()=> whoam_i(fav.type, fav.id)}>{fav.name} </div>
									
									<i className="fas fa-trash pt-1"
										onClick={() => {
											actions.deleteFavorite(fav)
										}}
									></i>
								</div>
							</li>
					)})}
				</ul>
			</div>	
		</div>
	</nav>
	);
};
