import React from "react";
// import Film from "./film";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";

const FilmsTable = ({
    films,
    onToggleBookMark,
    onDelete,
    filmCrop,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Kачества" },
        films: { path: "genereOfFilm.name", name: "Жанр" },
        viewed: { path: "viewed", name: "к-во просмотров" },
        rate: { path: "rate", name: "оценка" },
        bookmark: {
            path: "bookmark",
            name: "избранное",
            component: (film) => (
                <BookMark
                    status={film.bookmark}
                    onToggleBookMark={onToggleBookMark}
                    filmId={film._id}
                />
            )
        },
        delete: {
            component: (film) => (
                <button
                    className="text-light btn bg-danger"
                    onClick={() => onDelete(film._id)}
                >
                    delete
                </button>
            )
        }
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: films }} />
            {/* <tbody>
                <Film
                    films={films}
                    onDelete={onDelete}
                    onToggleBookMark={onToggleBookMark}
                    filmCrop={filmCrop}
                />
            </tbody> */}
        </table>
    );
};

FilmsTable.propTypes = {
    films: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    filmCrop: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default FilmsTable;
