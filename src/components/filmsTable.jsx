import React from "react";
import PropTypes from "prop-types";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";
import Table from "./table";
import { Link } from "react-router-dom";

const FilmsTable = ({
    films,
    onToggleBookMark,
    onDelete,
    filmCrop,
    onSort,
    selectedSort
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            arrowDirection: "none",
            component: (film) => (
                <Link to={`/films/${film._id}`}>{film.name}</Link>
            )
        },
        qualities: {
            name: "Kачества",
            arrowDirection: "none",
            component: (film) => <Qualitie film={film} />
        },
        films: {
            path: "genereOfFilm.name",
            name: "Жанр",
            arrowDirection: "none"
        },
        viewed: { path: "viewed", name: "vived(Раз)", arrowDirection: "none" },
        rate: { path: "rate", name: "оценка", arrowDirection: "none" },
        bookmark: {
            path: "bookmark",
            name: "избранное",
            arrowDirection: "none",
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
        // <Table>
        //     <TableHeader {...{ onSort, selectedSort, columns }} />
        //     <TableBody {...{ columns, data: films }} />
        // </Table>

        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={films}
        />
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
