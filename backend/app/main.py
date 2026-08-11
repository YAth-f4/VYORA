from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import movies


app = FastAPI()


# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(movies.router, prefix="/api/movies")


@app.get("/")
def home():
    return {
        "message": "Movie Recommendation Backend is running!"
    }