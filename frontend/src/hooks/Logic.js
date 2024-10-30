import { useState, useEffect } from "react";
import axios from "axios";

// All the logic used in the App.js
const useAppLogic = () => {
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [mediaType, setMediaType] = useState("all");
  const [token, setToken] = useState("");

  // Fetching the token from the api
  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios.get("http://localhost:5000/api/token");
      setToken(response.data.token);
    };
    fetchToken();
  }, []);

  // Search bar to get the desired media from the API
  const handleSearch = async (query) => {
    try {
      const response = await axios.get("http://localhost:5000/api/search", {
        params: { term: query, media: mediaType },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Search Response:", response);
      setResults(response.data || []);
    } catch (error) {
      console.error("Error during search request:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      alert("An error occurred while searching. Please try again.");
    }
  };

  // Add to favourites
  const addToFavourite = (item) => {
    setFavourites([...favourites, item]);
  };

  // Remove from favourites
  const removeFromFavourite = (item) => {
    setFavourites(
      favourites.filter(
        (fav) =>
          fav.trackId !== item.trackId || fav.collectionId !== item.collectionId
      )
    );
  };

  // Checking if the item is in the favourites
  const isFavourite = (item) => {
    return favourites.some(
      (fav) =>
        fav.trackId === item.trackId && fav.collectionId === item.collectionId
    );
  };

  return {
    results,
    favourites,
    mediaType,
    setMediaType,
    handleSearch,
    addToFavourite,
    removeFromFavourite,
    isFavourite,
  };
};

export default useAppLogic;
