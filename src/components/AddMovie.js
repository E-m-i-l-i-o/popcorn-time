
import { useState } from "react";

// FORM to add movies to our list




function AddMovie(props){
    const [title, setTitle] = useState("");               //title is whatever the user types in the form
    const [rating, setRating] = useState("");             //rating is whatever the user types in the form
    


  // handle the Form submission
  const handleSubmit = (e) => {
    e.preventDefault();                                           // avoid page refresh

    const newMovie = {
      title: title,                                               //// the key title comes from the following the same pattern as we have in the Json) /// then, the value: title, is whatever the user types in the form and we defined it as value in the second useState above
      rating: rating,                                           ///we take teh value rating from the useState above
    };
    // moviesToDisplay.push(newMovie) ///NEVER MODIFY STATE DIRECTLY
    
    
    props.callbackToCreate(newMovieDetails);
   

    // clear the form after submitting it
    setTitle("");
    setRating("");

  };

    return(
        <section className = 'AddMovie' >
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
      </section>    );
}


export default AddMovie;