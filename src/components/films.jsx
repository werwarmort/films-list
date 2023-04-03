import React, { useState, useEffect } from "react";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import api from "../api";
import PropTypes from "prop-types";
import FilmsTable from "./filmsTable";
import _ from "lodash";

const Films = ({ onDelete, onToggleBookMark, films }) => {
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

    // ============== Фильтрация
    const [selectedGenre, setSelectedGenre] = useState();

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

    const sortedFilms = _.orderBy(filteredFilms, [sortBy.path], [sortBy.order]); // ======== фильтрация

    const filmCrop = paginate(sortedFilms, currentPage, pageSize); // ======== пагинация

    const clearFilter = () => {
        setSelectedGenre();
    };

    const handleGenreSelect = (item) => {
        setSelectedGenre(item);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGenre]);
    // ==============

    return (
        <div className="d-flex justify-content-center">
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

                {films && (
                    <FilmsTable
                        films={films}
                        onDelete={onDelete}
                        onToggleBookMark={onToggleBookMark}
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
};

Films.propTypes = {
    films: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default Films;
