import { useMovieContext } from "../Contexts/MovieContext";
import { useState, useEffect, useRef } from "react";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const [showOverlay, setShowOverlay] = useState(false);
  const cardRef = useRef(null);

  function onFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function handleCardTap() {
    setShowOverlay(true); // open on tap
  }

  // ✅ Close overlay when clicking outside the movie card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowOverlay(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="movie-card group relative rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      onClick={handleCardTap}
    >
      <div className="movie-poster relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto object-cover"
        />
        <div
          className={`
            movie-overlay absolute inset-0 bg-black bg-opacity-60 
            transition-opacity duration-300 flex items-center justify-center
            ${showOverlay ? "opacity-50" : "opacity-0"} 
            group-hover:opacity-50
          `}
        >
          <button
            className={`favorite-btn text-3xl ${
              favorite ? "text-red-500" : "text-white"
            } hover:scale-125 transition-transform duration-200`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info bg-black p-4 text-center">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
