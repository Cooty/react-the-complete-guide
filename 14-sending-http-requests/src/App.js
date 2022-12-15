import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function transformMovieData(moviesFromAPI) {
  const moviesForUI = [];

  for (const key in moviesFromAPI) {
    moviesForUI.push({
      id: key,
      title: moviesFromAPI[key].title,
      releaseDate: moviesFromAPI[key].releaseDate,
      openingText: moviesFromAPI[key].openingText,
    });
  }

  return moviesForUI;
  // return moviesFromAPI.map((movieFromAPI) => {
  //   return {
  //     id: movieFromAPI.episode_id,
  //     title: movieFromAPI.title,
  //     releaseDate: movieFromAPI.release_date,
  //     openingText: movieFromAPI.opening_crawl,
  //   };
  // });
}

async function addMovieHandler(movie) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
}

// const API_URL = "http://swapi.dev/api/films";

const API_URL =
  "https://react-http-35c35-default-rtdb.europe-west1.firebasedatabase.app/movies.json";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetch(API_URL);
      if (!result.ok) {
        throw Error(`Failed to load movies. Response code: ${result.status}`);
      }
      const data = await result.json();
      setMovies(transformMovieData(data));
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  let content = <p>Found no movies</p>;

  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (!isLoading && error) {
    content = error;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>

      <section>
        <button onClick={getMovies} disabled={isLoading}>
          Fetch Movies
        </button>
      </section>

      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
