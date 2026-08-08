// API Service Layer for CINEMATIC
// Abstracted interface matching future FastAPI backend endpoints:
// GET /api/movies
// GET /api/movies/{id}
// GET /api/search?q=
// GET /api/recommendations/{movie_id}
// POST /api/ratings
// GET /api/trending

import { MOVIES, MOODS, MOCK_USER_UNIVERSE } from '../data/mockMovies';

export { MOVIES, MOODS };

// Simulated delay helper for realistic network behavior
const delay = (ms = 150) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch all movies with optional filters
 */
export async function getMovies({ genre, mood, search, sortBy = 'rating' } = {}) {
  await delay();
  let result = [...MOVIES];

  if (genre && genre !== 'All') {
    result = result.filter(m => m.genres.includes(genre));
  }

  if (mood && mood !== 'All') {
    result = result.filter(m => m.moods.includes(mood));
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.genres.some(g => g.toLowerCase().includes(q))
    );
  }

  if (sortBy === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'year') {
    result.sort((a, b) => b.year - a.year);
  } else if (sortBy === 'title') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
}

/**
 * Fetch movie by ID
 */
export async function getMovieById(id) {
  await delay();
  const movie = MOVIES.find(m => m.id === id);
  if (!movie) {
    throw new Error(`Movie with ID ${id} not found.`);
  }
  return movie;
}

/**
 * Search movies by query string
 */
export async function searchMovies(query) {
  return getMovies({ search: query });
}

/**
 * Fetch recommendations for a given movie ID
 */
export async function getRecommendations(movieId) {
  await delay();
  const current = MOVIES.find(m => m.id === movieId);
  if (!current) return [];

  // Return connected constellation movies with full object details where available
  const constellationIds = current.constellation.map(c => c.id);
  const detailedConnected = MOVIES.filter(m => constellationIds.includes(m.id));

  // Fallback to related genre movies if needed
  if (detailedConnected.length < 3) {
    const genreRelated = MOVIES.filter(m => 
      m.id !== movieId && 
      m.genres.some(g => current.genres.includes(g)) &&
      !constellationIds.includes(m.id)
    );
    return [...detailedConnected, ...genreRelated].slice(0, 6);
  }

  return detailedConnected;
}

/**
 * Get trending / featured movies
 */
export async function getTrending() {
  await delay();
  return MOVIES.slice(0, 6);
}

/**
 * Get available moods list
 */
export async function getMoods() {
  await delay();
  return MOODS;
}

/**
 * Submit user rating (future POST /api/ratings)
 */
export async function rateMovie(movieId, rating) {
  await delay();
  console.log(`[API Mock] Submitted rating ${rating} for movie ${movieId}`);
  return { success: true, movieId, rating };
}

/**
 * Get user universe stats (future GET /api/user/universe)
 */
export async function getUserUniverse() {
  await delay();
  return MOCK_USER_UNIVERSE;
}
