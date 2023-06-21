import { useState } from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";

import "./Main.css";

function Main() {

    //const [something, setSomething] = useState(initialValue)
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    

    
    const deleteMovie = (movieId) => {
        console.log("deleting movie with id....", movieId)

        // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

        const newList = moviesToDisplay.filter( (element) => {    //.filter returns an array. I store it in newList
            return element.id !== movieId;                          //here we tell the fucntion: only pass to the final array all those elements that are NOT the one I click
        });
        //setSomething(newValue)
        setMoviesToDisplay(newList);                                //we call this fucntion and pass the final array

    }

     // Conditional Rendering: option A (Element Variables)
    let message = "";
    if(moviesToDisplay.length > 0){
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>;
    } else {
        message = <h1>Sorry, no movies to display</h1>;
    }


    return (
        <div className="Main">
            {/* this  {message} comes from the conditional rendering option A */}
            {message} 

            {/* we here call only one movie from Movie.js so we iterate throught the whole array THE .map methods return an array and we need to RETURN */}
            {moviesToDisplay.map((movieObj) => {
                    return <Movie  key={movieObj.id} movieDetails = {movieObj}/>  //we need a key in the parent element when a .map method. //// we create the movie Details out of this air and can call it whatever: something={value} if a variable or something="value", if a string.
            })}


            
        </div>
    );
}

export default Main;