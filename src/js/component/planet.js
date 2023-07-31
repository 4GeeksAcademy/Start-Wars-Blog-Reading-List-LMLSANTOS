import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


const Planet = (props) => {
    // Verifies if planet contains the expected data
    console.log("planet", props.planet);

    const [planet, setPlanet] = useState();
     // calls the function getPlanet when the component is rendered
     useEffect(()=>{
        getPlanet()
    },[])

    //Gets the planets of Star Wars API based on a specific id:
    const getPlanet = ()=> {
        //this fetch function, returns a promise
        fetch("https://www.swapi.tech/api/planets/" + props.planet.uid, {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
         // response converted to JSON format, returns also a promisse
         .then(resp => {
            console.log(resp.ok);
            console.log(resp.status);
            console.log(resp);
            return resp.json();
        })
        // handles the resolved promisse, from the previous step, where the data (JSON response) is logged to the console, and passed to the setPeople()
        .then(data => {
            console.log(data);
            setPlanet(data.result.properties)
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }
    
    return (
        <div className="card" style={{width: "18rem"}}>
            {planet && <img src={""} className
            ="card-img-top" alt="..."/>}
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
            </div>
            {planet ? (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Diameter: {planet.diameter}</li>
                    <li className="list-group-item">Population: {planet.population}</li>
                    <li className="list-group-item">Climate: {planet.climate}</li>
                </ul>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            
            <div>
            <Link to="/planet/:id">
                <button type="button" className="btn btn-outline-success">Learn More!</button>
            </Link>
                <button type="button" className="btn btn-outline-success"><i className="far fa-heart"></i></button>
            </div>
        </div>
    )
};

export default Planet;