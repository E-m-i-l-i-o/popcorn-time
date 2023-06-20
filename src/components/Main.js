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

            {moviesToDisplay.map((movieObj) => {
                return(
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <p>Rating: {movieObj.rating}</p>

                        {/* conditional rendering option C */}
                        {movieObj.imgURL                                             //if this confition is truthy, then show our image
                        ? <img src={movieObj.imgURL} />                             //if the conditoin is not truthy... then show the placeholder
                        : <img src="https://dummyimage.com/182x268/ffffff/000000" /> //this is a generic placeholder icon from the internet
                         }
                        

                        {/* OPTION B //  if the rating is above 8, then render a message> RECCOMENDED */}
                        { movieObj.rating > 8 && <p>RECOMMENDED</p>}


                        <button onClick={ () => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;