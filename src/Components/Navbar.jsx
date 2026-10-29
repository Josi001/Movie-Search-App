import React from "react";
import { Search, Bell } from "lucide-react";

const Navbar = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <div className="nav">
      <div className="movieSearchText">
        <Search
          className="searchIcon"
          size={24}
          color="#ffff"
          strokeWidth={3.5}
        />
        <p className="movie_p">Movie</p>
        <p className="search_p">Search</p>
      </div>

      <div className="movieSearchBar">
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar"
            type="text"
            placeholder="Search for movies, actors or directors..."
            value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="notification">
        <Bell />
      </div>
    </div>
  );
};

export default Navbar;
