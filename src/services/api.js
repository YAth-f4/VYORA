// API Service Layer for VYORA
//
// Movies are connected to the FastAPI backend.
// Discover + Random Movie + Recommendations are backend based.
// Other VYORA features remain mock-based for now.

import {
  MOVIES,
  MOODS,
  SUB_VIBES,
  MOCK_VIBE_USERS,
  SHARED_VIBES_DATA,
  MOCK_VIBE_EVOLUTION,
  MOCK_USER_UNIVERSE,
} from '../data/mockMovies';

export {
  MOVIES,
  MOODS,
  SUB_VIBES,
  MOCK_VIBE_USERS,
  SHARED_VIBES_DATA,
  MOCK_VIBE_EVOLUTION,
};

const API_BASE_URL = 'http://127.0.0.1:8000';

const delay = (ms = 120) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all movies from FastAPI
 *
 * GET /api/movies/
 */
export async function getMovies({
  genre,
  mood,
  subVibe,
  search,
  sortBy = 'rating',
} = {}) {
  const response = await fetch(
    `${API_BASE_URL}/api/movies/`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  let result = await response.json();

  // -------------------------
  // Genre Filter
  // -------------------------
  if (genre && genre !== 'All') {
    result = result.filter((movie) =>
      movie.genres?.includes(genre)
    );
  }

  // -------------------------
  // Mood Filter
  // -------------------------
  if (mood && mood !== 'All') {
    result = result.filter((movie) =>
      movie.moods?.includes(mood)
    );
  }

  // -------------------------
  // Sub-Vibe Filter
  // -------------------------
  if (subVibe && subVibe !== 'All') {
    result = result.filter(
      (movie) => movie.subVibe === subVibe
    );
  }

  // -------------------------
  // Search
  // -------------------------
  if (search) {
    const q = search.toLowerCase().trim();

    result = result.filter(
      (movie) =>
        movie.title
          ?.toLowerCase()
          .includes(q) ||
        movie.director
          ?.toLowerCase()
          .includes(q) ||
        movie.genres?.some((genreName) =>
          genreName
            .toLowerCase()
            .includes(q)
        ) ||
        movie.moods?.some((moodId) =>
          moodId
            .toLowerCase()
            .includes(q)
        )
    );
  }

  // -------------------------
  // Sorting
  // -------------------------
  if (sortBy === 'rating') {
    result.sort(
      (a, b) =>
        (b.rating || 0) -
        (a.rating || 0)
    );
  }

  if (sortBy === 'match') {
    result.sort(
      (a, b) =>
        (b.vibeMatchScore || 0) -
        (a.vibeMatchScore || 0)
    );
  }

  if (sortBy === 'year') {
    result.sort(
      (a, b) =>
        (b.year || 0) -
        (a.year || 0)
    );
  }

  if (sortBy === 'title') {
    result.sort((a, b) =>
      (a.title || '').localeCompare(
        b.title || ''
      )
    );
  }

  return result;
}

/**
 * Get movies specifically for Discover
 *
 * Uses real FastAPI movie data.
 */
export async function getDiscoverMovies({
  genre = 'All',
  mood = 'All',
  subVibe = 'All',
} = {}) {
  return getMovies({
    genre,
    mood,
    subVibe,
    sortBy: 'match',
  });
}

/**
 * Get ONE random movie from FastAPI
 *
 * GET /api/movies/discover/random
 *
 * This powers the DISCOVER SOMETHING button.
 */
export async function getRandomMovie() {
  const response = await fetch(
    `${API_BASE_URL}/api/movies/discover/random`
  );

  if (!response.ok) {
    throw new Error(
      'Failed to fetch random movie'
    );
  }

  return response.json();
}

/**
 * Get single movie from FastAPI
 *
 * GET /api/movies/{id}
 */
export async function getMovieById(id) {
  const response = await fetch(
    `${API_BASE_URL}/api/movies/${encodeURIComponent(
      id
    )}`
  );

  if (!response.ok) {
    throw new Error(
      `Movie with ID ${id} not found.`
    );
  }

  return response.json();
}

/**
 * Search movies
 *
 * Uses the backend movie database.
 */
export async function searchMovies(query) {
  return getMovies({
    search: query,
  });
}

/**
 * Get moods
 *
 * Mock for now.
 */
export async function getMoods() {
  await delay();

  return MOODS;
}

/**
 * Get movie recommendations
 *
 * GET /api/movies/recommendations/{movie_id}
 *
 * Backend based.
 */
export async function getRecommendations(
  movieId
) {
  const response = await fetch(
    `${API_BASE_URL}/api/movies/recommendations/${encodeURIComponent(
      movieId
    )}`
  );

  if (!response.ok) {
    throw new Error(
      'Failed to fetch recommendations'
    );
  }

  return response.json();
}

/**
 * Get Vibe Circle users
 *
 * Mock for now.
 */
export async function getVibeCircle() {
  await delay();

  return MOCK_VIBE_USERS;
}

/**
 * Search Vibe Circle users
 *
 * Mock for now.
 */
export async function searchVibeUsers(query) {
  await delay();

  if (!query) {
    return MOCK_VIBE_USERS;
  }

  const q = query.toLowerCase();

  return MOCK_VIBE_USERS.filter(
    (user) =>
      user.name
        ?.toLowerCase()
        .includes(q) ||
      user.role
        ?.toLowerCase()
        .includes(q) ||
      user.topGenres?.some((genre) =>
        genre
          .toLowerCase()
          .includes(q)
      )
  );
}

/**
 * Send Circle Request
 *
 * Mock for now.
 */
export async function sendCircleRequest(
  userId
) {
  await delay();

  return {
    success: true,
    userId,
    status: 'REQUEST SENT',
  };
}

/**
 * Get Shared Vibes
 *
 * Mock for now.
 */
export async function getSharedVibes(
  otherUserId
) {
  await delay();

  const found =
    SHARED_VIBES_DATA[otherUserId];

  if (found) {
    return found;
  }

  const targetUser =
    MOCK_VIBE_USERS.find(
      (user) => user.id === otherUserId
    ) || MOCK_VIBE_USERS[2];

  return {
    userId: targetUser.id,
    userName: targetUser.name,
    vibeMatch: targetUser.vibeMatch,
    sharedCount:
      targetUser.sharedMoviesCount,
    sharedGenres: targetUser.topGenres,

    bothLove: MOVIES.slice(0, 3).map(
      (movie) => movie.id
    ),

    couldIntroduce: MOVIES.slice(3, 5).map(
      (movie) => movie.id
    ),
  };
}

/**
 * Get User Universe
 *
 * Mock for now.
 */
export async function getUserUniverse() {
  await delay();

  return MOCK_USER_UNIVERSE;
}

/**
 * Get Vibe Evolution
 *
 * Mock for now.
 */
export async function getVibeEvolution() {
  await delay();

  return MOCK_VIBE_EVOLUTION;
}

/**
 * Rate Movie
 *
 * Mock for now.
 */
export async function rateMovie(
  movieId,
  rating
) {
  await delay();

  return {
    success: true,
    movieId,
    rating,
  };
}

/**
 * Toggle Watchlist
 *
 * Mock for now.
 */
export async function toggleWatchlist(
  movieId
) {
  await delay();

  return {
    success: true,
    movieId,
  };
}