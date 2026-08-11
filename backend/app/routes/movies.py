from fastapi import APIRouter, HTTPException
from pathlib import Path
import json
import random

router = APIRouter()

DATA_FILE = (
    Path(__file__).resolve().parents[2]
    / "data"
    / "movies.json"
)


def load_movies():
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


# GET /api/movies/
@router.get("/")
def get_movies():
    return load_movies()


# GET /api/movies/recommendations/{movie_id}
@router.get("/recommendations/{movie_id}")
def get_recommendations(movie_id: str):
    movies = load_movies()

    current_movie = next(
        (
            movie
            for movie in movies
            if movie["id"] == movie_id
        ),
        None
    )

    if current_movie is None:
        raise HTTPException(
            status_code=404,
            detail="Movie not found"
        )

    current_genres = set(
        current_movie.get("genres", [])
    )

    recommendations = []

    for movie in movies:
        if movie["id"] == movie_id:
            continue

        movie_genres = set(
            movie.get("genres", [])
        )

        shared_genres = current_genres.intersection(
            movie_genres
        )

        if shared_genres:
            recommendations.append(
                {
                    "movie": movie,
                    "matchScore": len(shared_genres),
                }
            )

    recommendations.sort(
        key=lambda item: (
            item["matchScore"],
            item["movie"].get("rating", 0)
        ),
        reverse=True
    )

    return [
        item["movie"]
        for item in recommendations[:6]
    ]


# GET /api/movies/discover/random
@router.get("/discover/random")
def discover_random_movie():
    movies = load_movies()

    if not movies:
        raise HTTPException(
            status_code=404,
            detail="No movies available"
        )

    return random.choice(movies)


# GET /api/movies/{movie_id}
@router.get("/{movie_id}")
def get_movie(movie_id: str):
    movies = load_movies()

    for movie in movies:
        if movie["id"] == movie_id:
            return movie

    raise HTTPException(
        status_code=404,
        detail="Movie not found"
    )