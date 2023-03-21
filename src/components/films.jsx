import React, { useState, useEffect } from "react";
import SearchStatus from "./searchStatus";
import Film from "./film";
import Pagination from "./pagination";
import GroupList from "./groupList";
import api from "../api";

const Films = () => {
    const [films, setFilms] = useState(api.films.fetchAll());

    const handleDelete = (filmId) => {
        setFilms(films.filter((item) => item._id !== filmId));
    };

    const [selectedGenre, setSelectedGenre] = useState();

    // ======== Пагинация

    const pageSize = 8;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const [currentPage, setCurrentPage] = useState(1);
    // ================

    // ======== Фильтрация
    // setGenres api.genre.fetchAll()
    const [genres, setGenres] = useState();

    const handleGenreSelect = (item) => {
        setSelectedGenre(item);
    };

    useEffect(() => {
        api.genre.fetchAll().then((data) => setGenres(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGenre]);
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

    const filteredFilms = selectedGenre
        ? films.filter((film) => film.genereOfFilm === selectedGenre)
        : films;
    const count = filteredFilms.length;
    const filmCrop = paginate(filteredFilms, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedGenre();
    };

    return (
        <div className="d-flex">
            {genres && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedGenre}
                        items={genres}
                        onItemSelect={handleGenreSelect}
                        valueProperty="_id"
                        contentProperty="name"
                    />
                    <button
                        className="btn btn-secondary mt-2 "
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} onItemSelect={handleGenreSelect} />
                {/* eslint-disable-next-line multiline-ternary */}
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
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Films;
