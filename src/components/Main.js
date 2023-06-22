
import Movie from "./Movie";

import "./Main.css";

function Main(props) {


    return (
        <div className="Main">
            {/* this  {message} comes from the conditional rendering option A
            {message}  */}

            {/* we here call only one movie from Movie.js so we iterate throught the whole array THE .map methods return an array and we need to RETURN */}
            {props.listOfMovies.map((movieObj) => {
                                   return <Movie key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />//we need a key in the parent element when a .map method. //// we create the movie Details out of this air and can call it whatever: something={value} if a variable or something="value", if a string. ///We also create a callbackToDelete name to reference from this parent component to the child component Movie.js, this way we can invoke the fucntionality in this parent component from the child component Movie.js/////we FORWARD the newly created callbackToDelete from the grandparent App.js to its grandchild Movie.js, via the child Main.js
            })}                                                                                                 


            
        </div>
    );
}

export default Main;