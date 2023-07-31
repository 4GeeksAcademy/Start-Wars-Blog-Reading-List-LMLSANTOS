import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Character = (props) => {
    // Verifies if people contains the expected data
    console.log("character", props.character);

    const navigate = useNavigate();
    

    const [character, setCharacter] = useState();
    // calls the function getCharacter when the component is rendered
    useEffect(()=>{
        getPeople()
    },[])

    //Gets the characters of Star Wars API based on a specific id:
    const getPeople = ()=> {
        //this fetch function, returns a promise
        fetch("https://www.swapi.tech/api/people/" + props.character.uid, {
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
            setCharacter(data.result.properties)
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            {character && <img src={""} className
            ="card-img-top" alt="..."/>}
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
            </div>
            {character ? (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: {character.gender}</li>
                    <li className="list-group-item">Eye_Color: {character.eye_color}</li>
                    <li className="list-group-item">Hair_Color: {character.hair_color}</li>   
                </ul>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            
            <div>
            <Link to="/people/:id">
                <button type="button" className="btn btn-outline-success">Learn More!</button>
            </Link>
                <button type="button" className="btn btn-outline-success"><i className="far fa-heart"></i></button>
            </div>
        </div>
    )
};

export default Character;