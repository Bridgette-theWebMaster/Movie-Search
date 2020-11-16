import React from "react";
import "./Main.css";
import SearchMovies from "./SearchMovies";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}
