import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main() {


    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    
    const deleteMovie = (movieId) => {
        console.log("deleting movie with id....", movieId)

        // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

        const newList = moviesToDisplay.filter( (element) => {    //.filter returns an array. I store it in newList
            return element.id !== movieId;                          //here we tell the fucntion: only pass to the final array all those elements that are NOT the one I click
        });

        setMoviesToDisplay(newList);                                //we call this fucntion passing the final array

    }

    return (
        <div className="Main">
            {moviesToDisplay.map((movieObj) => {
                return(
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <button onClick={ () => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;