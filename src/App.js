import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie";


import "./App.css";

function App() {
  //const [something, setSomething] = useState(initialValue)
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  
  const createMovie = (newMovie) => {
    // new list = an array with the new movie + all the movies we had before
    const newList = [newMovie, ...moviesToDisplay];

    // update state
    setMoviesToDisplay(newList);
  }



// DELETE button
                                                            // we need to pass this fucntion to Movie.js (grandchild) lifting State
  const deleteMovie = (movieTitle) => {
    console.log("deleting movie with id....", movieTitle);

                                                            // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

    const newList = moviesToDisplay.filter((element) => {
                                                             //.filter returns an array. I store it in newList
      return element.title !== movieTitle;                      //here we tell the fucntion: only pass to the final array all those elements that are NOT the one I click
    });
    //setSomething(newValue)
    setMoviesToDisplay(newList);                                  //we call this fucntion and pass the final array
  };




  return (
    <div className="App">
                                                          {/* we create a property numberOfMovies and assign it a value in thisparent component, so that Header can receive it as a prop */}

      <Header numberOfMovies={moviesToDisplay.length} />
                                                          {/* we create a property listOfMovies and assign it a value in thisparent component, so that Main can receive it as a prop . we create the callback to delete in order to execute this funciton from a grandchild (MOVIE)*/}

      <AddMovie callbackToCreate ={createMovie}/>

     

      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />
    </div>
  );
}

export default App;
