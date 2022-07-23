import React from "react";
import { movies } from "../data";

function Movies() {
  const movie =movies.map((item,index)=>{
    return (
      <div key={index}>
        <h2>{item.title}</h2>
        <p>Duration: {item.time} minutes</p>
        <ul>
          {item.genres.map((genre,index)=>(
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    )
  }) 

  return <div>
    <h1>Movies Page</h1>
    {movie}
    </div>;
}

export default Movies;