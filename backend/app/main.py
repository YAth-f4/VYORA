from fastapi import FastAPI
from app.routes import movies

app = FastAPI()

app.include_router(movies.router, prefix="/api/movies")

@app.get("/")
def home():
    return {"message": "Movie Recommendation Backend is running!"}