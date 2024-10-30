import React from "react";
import "../css/ResultsList.css";

// Result list after the user has entered something in the search bar
const ResultsList = ({
  results,
  onAddToFavourite,
  onRemoveFromFavourite,
  isFavourite,
}) => {
  return (
    <div className="results-container">
      {results.map((result, index) => (
        <div
          key={`${result.trackId || result.collectionId}-${index}`}
          className="results-row"
        >
          <img
            src={result.artworkUrl100}
            className="results-img"
            alt={result.collectionName || result.trackName}
          />
          <div className="results-details">
            <h5 className="results-title">
              {result.trackName || result.collectionName}
            </h5>
            {result.collectionName && (
              <p className="results-album">{result.collectionName}</p>
            )}
            <p className="results-artist">{result.artistName}</p>
          </div>
          {/* Button to add to favourites. Button changes to "Undo" when the user clicks on it */}
          <button
            className={`btn ${
              isFavourite(result) ? "btn-danger" : "btn-primary"
            }`}
            onClick={() => {
              isFavourite(result)
                ? onRemoveFromFavourite(result)
                : onAddToFavourite(result);
            }}
          >
            {isFavourite(result) ? "Undo" : "Add to Favourites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
