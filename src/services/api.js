// API Service Layer for VYORA (Find Your Vibe)
// Abstracted interface matching future FastAPI backend endpoints:
// GET /api/movies
// GET /api/movies/{id}
// GET /api/search?q=
// GET /api/recommendations/{movie_id}
// GET /api/users/{id}/recommendations
// GET /api/users/{id}/history
// GET /api/users/{id}/watchlist
// POST /api/ratings
// POST /api/watchlist
// GET /api/trending
// GET /api/users/{id}/vibe
// GET /api/users/{id}/circle
// POST /api/users/{id}/circle/request
// POST /api/users/{id}/circle/accept
// DELETE /api/users/{id}/circle/{friend_id}
// GET /api/users/{id}/vibe-match/{other_user_id}
// GET /api/users/{id}/shared-vibes/{other_user_id}

import {
  MOVIES,
  MOODS,
  SUB_VIBES,
  MOCK_VIBE_USERS,
  SHARED_VIBES_DATA,
  MOCK_VIBE_EVOLUTION,
  MOCK_USER_UNIVERSE
} from '../data/mockMovies';

export { MOVIES, MOODS, SUB_VIBES, MOCK_VIBE_USERS, SHARED_VIBES_DATA, MOCK_VIBE_EVOLUTION };

const delay = (ms = 120) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch movies with optional filters (GET /api/movies)
 */
export async function getMovies({ genre, mood, subVibe, search, sortBy = 'rating' } = {}) {
  await delay();
  let result = [...MOVIES];

  if (genre && genre !== 'All') {
    result = result.filter(m => m.genres.includes(genre));
  }

  if (mood && mood !== 'All') {
    result = result.filter(m => m.moods.includes(mood));
  }

  if (subVibe && subVibe !== 'All') {
    result = result.filter(m => m.subVibe === subVibe);
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.genres.some(g => g.toLowerCase().includes(q)) ||
      m.moods.some(moodId => moodId.toLowerCase().includes(q))
    );
  }

  if (sortBy === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'match') {
    result.sort((a, b) => b.vibeMatchScore - a.vibeMatchScore);
  } else if (sortBy === 'year') {
    result.sort((a, b) => b.year - a.year);
  } else if (sortBy === 'title') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
}

/**
 * Fetch movie by ID (GET /api/movies/{id})
 */
export async function getMovieById(id) {
  await delay();
  const movie = MOVIES.find(m => m.id === id);
  if (!movie) {
    return MOVIES[0];
  }
  return movie;
}

/**
 * Search movies query (GET /api/search?q=)
 */
export async function searchMovies(query) {
  return getMovies({ search: query });
}

/**
 * Fetch available moods (GET /api/moods)
 */
export async function getMoods() {
  await delay();
  return MOODS;
}

/**
 * Fetch recommendations for movie (GET /api/recommendations/{movie_id})
 */
export async function getRecommendations(movieId) {
  await delay();
  const current = MOVIES.find(m => m.id === movieId);
  if (!current) return MOVIES.slice(0, 4);

  const constellationIds = current.constellation?.map(c => c.id) || [];
  const detailedConnected = MOVIES.filter(m => constellationIds.includes(m.id));

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
 * Fetch Vibe Circle users (GET /api/users/{id}/circle)
 */
export async function getVibeCircle() {
  await delay();
  return MOCK_VIBE_USERS;
}

/**
 * Search users by username / name
 */
export async function searchVibeUsers(query) {
  await delay();
  if (!query) return MOCK_VIBE_USERS;
  const q = query.toLowerCase();
  return MOCK_VIBE_USERS.filter(u =>
    u.name.toLowerCase().includes(q) ||
    u.role.toLowerCase().includes(q) ||
    u.topGenres.some(g => g.toLowerCase().includes(q))
  );
}

/**
 * Send circle connection request (POST /api/users/{id}/circle/request)
 */
export async function sendCircleRequest(userId) {
  await delay();
  return { success: true, userId, status: "REQUEST SENT" };
}

/**
 * Fetch shared vibes with another user (GET /api/users/{id}/shared-vibes/{other_user_id})
 */
export async function getSharedVibes(otherUserId) {
  await delay();
  const found = SHARED_VIBES_DATA[otherUserId];
  if (found) return found;

  const targetUser = MOCK_VIBE_USERS.find(u => u.id === otherUserId) || MOCK_VIBE_USERS[2];
  return {
    userId: targetUser.id,
    userName: targetUser.name,
    vibeMatch: targetUser.vibeMatch,
    sharedCount: targetUser.sharedMoviesCount,
    sharedGenres: targetUser.topGenres,
    bothLove: MOVIES.slice(0, 3).map(m => m.id),
    couldIntroduce: MOVIES.slice(3, 5).map(m => m.id)
  };
}

/**
 * Get User Universe profile data (GET /api/users/{id}/universe)
 */
export async function getUserUniverse() {
  await delay();
  return MOCK_USER_UNIVERSE;
}

/**
 * Get User Vibe Evolution timeline (GET /api/users/{id}/vibe-evolution)
 */
export async function getVibeEvolution() {
  await delay();
  return MOCK_VIBE_EVOLUTION;
}

/**
 * Rate movie (POST /api/ratings)
 */
export async function rateMovie(movieId, rating) {
  await delay();
  return { success: true, movieId, rating };
}

/**
 * Toggle Watchlist (POST /api/watchlist)
 */
export async function toggleWatchlist(movieId) {
  await delay();
  return { success: true, movieId };
}
