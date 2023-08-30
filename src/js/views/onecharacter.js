import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export const OneCharacter = () => {

    const params= useParams();

    const [character, setCharacter] = useState();
    
    // calls the function getCharacter when the component is rendered
    useEffect(()=>{
        getPeople()
    },[])

    //Gets the characters of Star Wars API based on a specific id:
    const getPeople = ()=> {
        //this fetch function, returns a promise
        fetch("https://www.swapi.tech/api/people/" + params.uid, {
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
        <div>
            I am the div {params.uid}
            
            
            {character ? ( // Check if character is available before rendering
                
                <div>
                    <div>
                        <h2>Character Details: {character.name}</h2>
                    </div>
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} 
                                className ="card-img-top" alt="..."
                                style={{ maxWidth: "400px", maxHeight: "550px" }}/>
                        <div>
                            lorem Ipsum
                        </div>

                    </div>



                    <p>Gender: {character.gender}</p>
                    <p>Height: {character.height}</p>
                    {/* Display other properties as needed */}
                </div>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    )
};

