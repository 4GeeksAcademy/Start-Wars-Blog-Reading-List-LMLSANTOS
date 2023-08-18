import React, { useState, useEffect } from "react";
import Character from "../component/character.js";
import Planet from "../component/planet.js";
import Vehicle from "../component/vehicle.js";
import Starship from "../component/starship.js";
import Specie from "../component/specie.js";

import "../../styles/home.css";

export const Home = () => {
	
	const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [starships, setStarships] = useState([]);
    const [species, setSpecies] = useState([]);
    

	// calls the function getAllPeople when the component is rendered
	useEffect(()=> {
		getPeople(); 
        getPlanet();
        getVehicle();
        getStarship();
       getSpecie();
	}, [])

    


	//Gets all the characters of Star Wars API 
    //--------------------------------------------------------------------
	const getPeople = ()=> {
        //this fetch function, returns a promise
		fetch("https://www.swapi.tech/api/people", {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
		// response converted to JSON format, returns also a promisse
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            
        })
        // handles the resolved promisse, from the previous step, where the data (JSON response) is logged to the console, and passed to the setAllPeople()
        .then(data => {
            if (data && data.results){
                setCharacters(data.results)
            }
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }

    


    //Gets all the planets of Star Wars API 
    //--------------------------------------------------------------------
	const getPlanet = ()=> {
        //this fetch function, returns a promise
		fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
        
        // response converted to JSON format, returns also a promisse
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            
        })
        // handles the resolved promisse, from the previous step, where the data (JSON response) is logged to the console, and passed to the setAllPeople()
        .then(data => {
            if (data && data.results){
                setPlanets(data.results)
            }
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }

    //Gets all the vehicles of Star Wars API 
    //--------------------------------------------------------------------
	const getVehicle = ()=> {
        //this fetch function, returns a promise
		fetch("https://www.swapi.tech/api/vehicles", {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
        
        // response converted to JSON format, returns also a promisse
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            
        })
        // handles the resolved promisse, from the previous step, where the data (JSON response) is logged to the console, and passed to the setAllPeople()
        .then(data => {
            if (data && data.results){
                setVehicles(data.results)
            }
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }

    //Gets all the starships of Star Wars API 
    //--------------------------------------------------------------------
	const getStarship = ()=> {
        //this fetch function, returns a promise
		fetch("https://www.swapi.tech/api/starships", {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
        
        // response converted to JSON format, returns also a promisse
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            
        })
        // handles the resolved promisse, from the previous step, where the data (JSON response) is logged to the console, and passed to the setAllPeople()
        .then(data => {
            if (data && data.results){
                setStarships(data.results)
            }
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }

    //Gets all the species of Star Wars API 
    //--------------------------------------------------------------------
	const getSpecie = ()=> {
        //this fetch function, returns a promise
		fetch("https://www.swapi.tech/api/species", {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })
        
        // response converted to JSON format, returns also a promisse
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            
        })
        // handles the resolved promisse, from the previous step, where the data (JSON response) is logged to the console, and passed to the setAllPeople()
        .then(data => {
            if (data && data.results){
                setSpecies(data.results)
            }
        })
        // handle any errors, that occur during the API request or JSON parsing, and logs the error to the console
        .catch(error => {
            console.log(error);
        });
    }
    // show all characters
	const showCharacters = ()=> {
		return characters.map((character)=> {
			return <Character key={character.uid} character={character} />
		})
	}
    // show all planets
    const showPlanets = ()=> {
		return planets.map((planet)=> {
			return <Planet key={planet.uid} planet={planet} />
		})
	}
    // show all vehicles
    const showVehicles = ()=> {
		return vehicles.map((vehicle)=> {
			return <Vehicle key={vehicle.uid} vehicle={vehicle} />
		})
	}
    // show all starships
    const showStarships = ()=> {
		return starships.map((starship)=> {
			return <Starship key={starship.uid} starship={starship} />
		})
	}

    // show all species
    const showSpecies = ()=> {
		return species.map((specie)=> {
			return <Specie key={specie.uid} specie={specie} />
		})
	}


    return (
        <div className="enclosure">
            <div className="py-2">
                <h2 className="font-weight-light px-2 text-white">Characters</h2>
                <div className="characters-container">
                    {characters.length !== 0 ? <div className="characters-wrapper">{showCharacters()}</div> : (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}    
                </div>
            </div>
            <div className="py-2">
                <h2 className="font-weight-light px-2 text-white">Planets</h2>
                <div className="planets-container">
                    {planets.length !== 0 ? <div className="planets-wrapper">{showPlanets()}</div> : (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}    
                </div>
            </div>
            <div className="py-2">
                <h2 className="font-weight-light px-2 text-white">Vehicles</h2>
                <div className="vehicles-container">
                    {vehicles.length !== 0 ? <div className="vehicles-wrapper">{showVehicles()}</div> : (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}    
                </div>
            </div>
            


        </div>
    )

}
