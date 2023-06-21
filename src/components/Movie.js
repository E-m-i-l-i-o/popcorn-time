function Movie(props) {


    return (
        <div className="card">
            <p>{props.movieDetails.title}</p>
            <p>Rating: {props.movieDetails.rating}</p>


            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }


            {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

            <p>
            {/* Lifting state: we can invoke the function callbackToDelete from the grandparent App.js (or also.... from the parent component Main.js)*/}
                 <button onClick={() => {props.callbackToDelete(props.movieDetails.title)}}>Delete this movie</button> 

            </p>
        </div>
    );
}

export default Movie;