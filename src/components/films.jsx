import React, { useState } from "react";
import api from "../api";

const Films = () => {
  const [films, setFilms] = useState(api.films.fetchAll());

  const handleDelete = (filmId) => {
    setFilms(films.filter((item) => item._id != filmId));
  };

  const renderPhrase = (number) => {
    const lastLetter = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "фильмов просмотренно";
    if ([2, 3, 4].indexOf(lastLetter) >= 0) return "фильма просмотренно";
    if (lastLetter === 1) return "фильм просмотренн";
    return "фильмов просмотренно";
  };

  return (
    <>
      <span
        className={"badge " + (films.length > 0 ? "bg-primary" : "bg-danger")}
      >
        {films.length > 0
          ? `${films.length} ${renderPhrase(films.length)}`
          : "вы не просмотрели ни одного фильма ("}
      </span>

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
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <tr key={film._id}>
              <td className="fs-6">{film.name}</td>
              <td>
                {film.qualities.map((item) => (
                  <span className={"badge m-1 bg-" + item.color} key={item._id}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{film.genereOfFilm.name}</td>
              <td className="text-center">{film.viewed}</td>
              <td className="text-center">{film.rate}</td>
              <td>
                <button
                  className="text-light btn bg-danger"
                  onClick={() => handleDelete(film._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Films;
