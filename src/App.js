import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  //const [something, setSomething] = useState(initialValue)
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  // FORM to add movies to our list
  const [title, setTitle] = useState("");               //title is whatever the user types in the form
  const [rating, setRating] = useState("");             //rating is whatever the user types in the form


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



  // handle the Form submission
  const handleSubmit = (e) => {
    e.preventDefault();                                           // avoid page refresh

    const newMovie = {
      title: title,                                               //// the key title comes from the following the same pattern as we have in the Json) /// then, the value: title, is whatever the user types in the form and we defined it as value in the second useState above
      rating: rating,                                           ///we take teh value rating from the useState above
    };
    // moviesToDisplay.push(newMovie) ///NEVER MODIFY STATE DIRECTLY

    const newList = [...moviesToDisplay, newMovie];               //we make a shallow copy of the array moviesToDisplay, because that is the list of movies we display in our website... and we add the new movie to that list but adding-> , newMovie
    setMoviesToDisplay(newList);


    // clear the form after submitting it
    setTitle("");
    setRating("");

  };

  return (
    <div className="App">
                                                          {/* we create a property numberOfMovies and assign it a value in thisparent component, so that Header can receive it as a prop */}

      <Header numberOfMovies={moviesToDisplay.length} />
                                                          {/* we create a property listOfMovies and assign it a value in thisparent component, so that Main can receive it as a prop . we create the callback to delete in order to execute this funciton from a grandchild (MOVIE)*/}

      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              required={true}
              name="title"
              placeholder="enter the title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
                <br />
          <label>
            Rating:
            <input
              type="number"
              min={1}
              max={10}
              required={true}
              name="rating"
              placeholder="your rating"
              value={rating}
              onChange={(e) => { 
                setRating(e.target.value);
               }}
            />
          </label>

          <button>Create</button>
        </form>
      </section>

      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />
    </div>
  );
}

export default App;
