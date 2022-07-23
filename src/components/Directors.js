import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((item, index) => (
    <div key={index}>
      <h2>{item.name}</h2>
      <ul>
        {item.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;