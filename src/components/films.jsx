import React, { useState } from "react";
import SearchStatus from "./searchStatus";
import Film from "./film";
import api from "../api";
import Pagination from "./pagination";

const Films = () => {
  const [films, setFilms] = useState(api.films.fetchAll());

  const handleDelete = (filmId) => {
    setFilms(films.filter((item) => item._id != filmId));
  };

  // ======== Пагинация
  const count = films.length;
  const pageSize = 8;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const [currentPage, setCurrentPage] = useState(1);
  // ================

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

  const paginate = (items, pageNumber, pageSize) => {
    const statrIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(statrIndex, pageSize);
  };

  const filmCrop = paginate(films, currentPage, pageSize);

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
              filmCrop={filmCrop}
            />
          </tbody>
        </table>
      ) : (
        <h1>no films :(</h1>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Films;
