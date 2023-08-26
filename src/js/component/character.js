import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";

import "../../styles/character.css";

const Character = (props) => {
    
   
    const navigate = useNavigate();
    const {store, actions} = useContext(Context);

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
        <div className="card" style={{width: "20rem"}}>
            {character && <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} className
            ="card-img-top" alt="..."/>}
            <div className="card-body">
                <h5 className="card-title text-white">{props.character.name}</h5>
            </div>
            {character ? (
                <ul className="list-group list-group-flush rounded">
                    <li className="list-group-item">Gender: {character.gender}</li>
                    <li className="list-group-item">Eye_Color: {character.eye_color}</li>
                    <li className="list-group-item">Hair_Color: {character.hair_color}</li>   
                </ul>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            
            <div className="d-flex justify-content-between mt-2 mb-2">
           
                <button type="button" className="ms-2 btn btn btn-light" onClick={()=> navigate("/onecharacter/"+props.character.uid)}>Learn More!</button>
                <button type="button" className="me-2 btn btn-outline-danger" onClick={()=>
                    actions.addFavorite({"name":props.character.name, "id":props.character.uid, "type":"character"})}><i className="far fa-heart"></i>
                </button>
            </div>
        </div>
    )
};

export default Character;