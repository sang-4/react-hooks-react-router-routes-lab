import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((item, index) => (
    <div key={index}>
      <h2>{item.name}</h2>
      <ul>
        {item.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Actors Page</h1>
    {actor}
  </div>;
}

export default Actors;