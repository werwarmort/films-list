import React, { useState, useEffect } from "react";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import api from "../api";
import FilmsTable from "./filmsTable";
import _ from "lodash";

const Films = () => {
    const [films, setFilms] = useState();

    useEffect(() => {
        api.films.fetchAll().then((data) => setFilms(data));
    }, []);

    const handleDelete = (filmId) => {
        setFilms(films.filter((item) => item._id !== filmId));
    };

    const handleToggleBookmark = (id) => {
        setFilms(
            films.map((film) => {
                if (film._id === id) {
                    return { ...film, bookmark: !film.bookmark };
                }
                return film;
            })
        );
    };

    // ======== Фильтрация
    const [genres, setGenres] = useState();
    useEffect(() => {
        api.genre.fetchAll().then((data) => setGenres(data));
    }, []);

    const [selectedGenre, setSelectedGenre] = useState();
    const handleGenreSelect = (item) => {
        setSelectedGenre(item);
    };
    // ================

    // ======== Пагинация
    const pageSize = 8;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (items, pageNumber, pageSize) => {
        const statrIndex = (pageNumber - 1) * pageSize;
        return [...items].splice(statrIndex, pageSize);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGenre]);
    // ================

    // ======== фильтрация
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    const handleSort = (item) => {
        setSortBy(item);
    };
    // ================

    if (films) {
        const filteredFilms = Array.isArray(films)
            ? selectedGenre
                ? films.filter(
                      (film) => film.genereOfFilm.name === selectedGenre.name
                  )
                : films
            : selectedGenre
            ? films.filter((film) => film.genereOfFilm === selectedGenre)
            : films;
        const count = filteredFilms.length;

        const sortedFilms = _.orderBy(
            filteredFilms,
            [sortBy.path],
            [sortBy.order]
        ); // ======== фильтрация

        const filmCrop = paginate(sortedFilms, currentPage, pageSize); // ======== пагинация

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
                    <SearchStatus
                        length={count}
                        onItemSelect={handleGenreSelect}
                    />

                    {films && (
                        <FilmsTable
                            films={filmCrop}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookmark}
                            filmCrop={filmCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
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
    }
    return "loading...";
};

export default Films;
