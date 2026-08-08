from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_movies():
    return [
        {
            "id": 1,
            "title": "Interstellar",
            "genre": "Sci-Fi",
            "rating": 8.7
        },
        {
            "id": 2,
            "title": "Inception",
            "genre": "Sci-Fi, Thriller",
            "rating": 8.8
        }
    ]