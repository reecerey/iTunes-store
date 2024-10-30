import React, { useState } from "react";
import "../css/SearchBar.css";

// Search bar to pull information from the API and display it in the front end
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Prompt to tell the user that the search bar can not be empty
  const handleSearch = () => {
    if (query.trim() === "") {
      window.alert("Search field cannot be empty");
    } else {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <div className="search-bar-button-container">
        <button className="btn btn-outline-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
