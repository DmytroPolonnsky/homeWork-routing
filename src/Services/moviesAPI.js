async function fetchFavoriteTV() {
  try {
    // const response = await fetch('https://api.themoviedb.org/3/account/21979843/favorite/movies', options);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmUyZjZlMTY2OTFmMDlmNzdmZTRlMDdjODk4MmRmYSIsIm5iZiI6MTc0NTk0MTc3My42Mywic3ViIjoiNjgxMGY1MGRlYjFkNGIwNmRlMGZkZjRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0Qt6Jw-s3h8eh2xZxMj3E7Nh0fFUabHsbk8jTC5ptp0",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default fetchFavoriteTV;
