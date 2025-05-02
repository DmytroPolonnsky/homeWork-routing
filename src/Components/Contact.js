import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import fetchFavoriteTV from "../Services/moviesAPI";
import SearchInput from "./Searchbox";

function Contact() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      const moviesApi = await fetchFavoriteTV();
      setMovies(moviesApi.results);
    }

    getMovies();
  }, []);

  function hendleChange(query) {
    navigate(`${location.pathname}?${query}`);
    console.log();
  }

  return (
    <>
      <SearchInput onSubmit={hendleChange} />
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${location.pathname}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Contact;
