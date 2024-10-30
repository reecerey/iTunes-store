import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MediaTypeSelector from "./components/MediaTypeSelector";
import ResultsList from "./components/ResultsList";
import FavouriteList from "./components/FavouriteList";
import useAppLogic from "./hooks/Logic";
import "./App.css";

// Calling everything from the logic
const App = () => {
  const {
    results,
    favourites,
    mediaType,
    setMediaType,
    handleSearch,
    addToFavourite,
    removeFromFavourite,
    isFavourite,
  } = useAppLogic();

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">i-Tunes Store</h1>
        <div className="navigation">
          <Link to="/">
            <button className="btn btn-primary">Search</button>
          </Link>
          <Link to="/favourites">
            <button className="btn btn-secondary">Go to Favourites</button>
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="search-container">
                  <div className="search-card">
                    <div className="search-controls">
                      <SearchBar onSearch={handleSearch} />
                      <MediaTypeSelector
                        selectedType={mediaType}
                        onTypeChange={setMediaType}
                      />
                    </div>
                  </div>
                </div>
                {results && results.length > 0 && (
                  <div className="results-container">
                    <div className="results-card">
                      <ResultsList
                        results={results}
                        onAddToFavourite={addToFavourite}
                        onRemoveFromFavourite={removeFromFavourite}
                        isFavourite={isFavourite}
                      />
                    </div>
                  </div>
                )}
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <>
                {favourites && favourites.length > 0 && (
                  <div className="favourites-container">
                    <div className="favourites-card">
                      <FavouriteList
                        favourites={favourites}
                        onRemoveFromFavourite={removeFromFavourite}
                      />
                    </div>
                  </div>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
