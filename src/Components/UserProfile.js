import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const [movie, setMovie] = useState(null);
  const { userId } = useParams();

  async function fetchMovieApi(id) {
    const apiKey = "c2e2f6e16691f09f77fe4e07c8982dfa";

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    fetchMovieApi(userId).then((data) => {
      setMovie(data);
    });
  }, []);

  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || "Movie poster"}
          />
        </div>
      )}
    </>
  );
}

export default UserProfile;
