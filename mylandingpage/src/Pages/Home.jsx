import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log("Popular movies:", popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to seach movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center gap-4 mb-8"
      >
        <Input
          type="text"
          placeholder="Seach for movies..."
          className="w-full sm:w-auto flex-grow hover:scale-102 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400
    active:scale-95 motion-safe:hover:scale-102"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="default" className=" mx-2 transform hover:scale-105 font-semibold font-mono focus:outline-none focus:ring-2 focus:ring-blue-400
    active:scale-95 motion-safe:hover:scale-105 transistion hover:bg-amber-500">
          Search
        </Button>
      </form>

      {error && <div className="error-emmsage">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
