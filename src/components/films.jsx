import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import Film from "./film";
import api from "../api";

const Films = () => {
  const [films, setFilms] = useState(api.films.fetchAll());

  const handleDelete = (filmId) => {
    setFilms(films.filter((item) => item._id != filmId));
  };

  const toggleBookmark = (id) => {
    console.log(id);
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
    <>
      <SearchStatus length={films.length} />

      {films.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Фильм</th>
              <th scope="col">Качества</th>
              <th scope="col">Жанр</th>
              <th scope="col">просмотрел</th>
              <th className="text-center" scope="col">
                оценка
              </th>
              <th scope="col">закладки</th>
            </tr>
          </thead>
          <tbody>
            <Film
              films={films}
              onDelete={handleDelete}
              onToggleBookMark={toggleBookmark}
            />
          </tbody>
        </table>
      ) : (
        <h1>no films :(</h1>
      )}
    </>
  );
};

export default Films;
