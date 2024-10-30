import React from "react";
import "../css/FavouriteList.css";

// List of Favourites added by the user
const FavouriteList = ({ favourites, onRemoveFromFavourite }) => {
  return (
    <div className="favourites-container">
      {favourites.map((item, index) => (
        <div
          key={`${item.trackId || item.collectionId}-${index}`}
          className="favourites-row"
        >
          <img
            src={item.artworkUrl100}
            className="favourites-img"
            alt={item.collectionName || item.trackName}
          />
          <div className="favourites-details">
            <h5 className="favourites-title">
              {item.trackName || item.collectionName}
            </h5>
            {item.collectionName && (
              <p className="favourites-album">{item.collectionName}</p>
            )}
            <p className="favourites-artist">{item.artistName}</p>
          </div>
          {/* Button to remove from the list */}
          <button
            className="btn btn-danger"
            onClick={() => onRemoveFromFavourite(item)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavouriteList;
