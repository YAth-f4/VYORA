// API Service Layer for CINEMATIC
// Connected to FastAPI backend

import {
  MOVIES,
  MOODS,
  MOCK_USER_UNIVERSE,
} from '../data/mockMovies';

export { MOVIES, MOODS };

const API_BASE_URL = 'http://127.0.0.1:8000';

// Fetch movies from FastAPI backend
export async function getMovies({
  genre,
  mood,
  search,
  sortBy = 'rating',
} = {}) {
  const response = await fetch(`${API_BASE_URL}/api/movies/`);

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  let result = await response.json();

  if (genre && genre !== 'All') {
    result = result.filter((movie) =>
      movie.genres.includes(genre)
    );
  }

  if (mood && mood !== 'All') {
    result = result.filter((movie) =>
      movie.moods.includes(mood)
    );
  }

  if (search) {
    const q = search.toLowerCase();

    result = result.filter(
      (movie) =>
        movie.title.toLowerCase().includes(q) ||
        movie.director.toLowerCase().includes(q) ||
        movie.genres.some((genre) =>
          genre.toLowerCase().includes(q)
        )
    );
  }

  if (sortBy === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'year') {
    result.sort((a, b) => b.year - a.year);
  } else if (sortBy === 'title') {
    result.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return result;
}

// Fetch single movie from FastAPI backend
export async function getMovieById(id) {
  const response = await fetch(
    `${API_BASE_URL}/api/movies/${encodeURIComponent(id)}`
  );

  if (!response.ok) {
    throw new Error(`Movie with ID ${id} not found.`);
  }

  return response.json();
}

// Search movies using backend movie data
export async function searchMovies(query) {
  return getMovies({ search: query });
}

// Temporary mock recommendations
// We will connect this to FastAPI later.
export async function getRecommendations(movieId) {
  const current = MOVIES.find((movie) => movie.id === movieId);

  if (!current) {
    return [];
  }

  const constellationIds = current.constellation.map(
    (movie) => movie.id
  );

  const detailedConnected = MOVIES.filter((movie) =>
    constellationIds.includes(movie.id)
  );

  if (detailedConnected.length < 3) {
    const genreRelated = MOVIES.filter(
      (movie) =>
        movie.id !== movieId &&
        movie.genres.some((genre) =>
          current.genres.includes(genre)
        ) &&
        !constellationIds.includes(movie.id)
    );

    return [
      ...detailedConnected,
      ...genreRelated,
    ].slice(0, 6);
  }

  return detailedConnected;
}

// Temporary mock trending
export async function getTrending() {
  return MOVIES.slice(0, 6);
}

// Temporary mock moods
export async function getMoods() {
  return MOODS;
}

// Temporary mock rating
export async function rateMovie(movieId, rating) {
  console.log(
    `[API Mock] Submitted rating ${rating} for movie ${movieId}`
  );

  return {
    success: true,
    movieId,
    rating,
  };
}

// Temporary mock user universe
export async function getUserUniverse() {
  return MOCK_USER_UNIVERSE;
}