import React, { useState, useEffect } from "react";
import Films from "./components/films";
import api from "./api";

function App() {
    const [films, setFilms] = useState();

    useEffect(() => {
        api.films.fetchAll().then((data) => setFilms(data));
    }, []);

    const handleDelete = (filmId) => {
        setFilms(films.filter((item) => item._id !== filmId));
    };

    const toggleBookmark = (id) => {
        setFilms(
            films.map((film) => {
                if (film._id === id) {
                    return { ...film, bookmark: !film.bookmark };
                }
                return film;
            })
        );
    };

    return (
        <div>
            {films && (
                <Films
                    onDelete={handleDelete}
                    onToggleBookMark={toggleBookmark}
                    films={films}
                />
            )}
        </div>
    );
}

export default App;
