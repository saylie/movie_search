import React from "react";

const Movielist = ({movies}) => {
    
    let moviesArray = [];
    if(movies && typeof movies === 'object'){
        moviesArray = Object.values(movies)
    }
    return(
        <div className="movie-list">
            {movies.Response === "True" ? (
                <>
                    <h2>Movie List</h2>
                    <ul>
                        {moviesArray[0].map((movie) => (
                            <li>
                                <h2>{movie.Title}</h2>
                                <div>
                                    <img width="200px" alt={`The movie title: ${movie.Title}`} src={movie.Poster}/>
                                </div>
                                <p>{movie.Year}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : <p>{movies.Error}</p>}
        </div>
    )

}

export default Movielist;