import React from "react";
import "../css/MediaTypeSelector.css";

// Dropdown menu to specify what media type the user wants
const MediaTypeSelector = ({ selectedType, onTypeChange }) => {
  const mediaTypes = [
    "all",
    "podcast",
    "music",
    "audiobook",
    "short film",
    "TV Show",
    "software",
    "ebook",
    "movie",
  ];

  return (
    <div className="media-selector">
      <select
        className="media-selector-control"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        {mediaTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MediaTypeSelector;
