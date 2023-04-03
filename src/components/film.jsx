import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

const Film = ({ films, onDelete, onToggleBookMark, filmCrop }) => {
    filmCrop.map((item) => console.log(item));
    return filmCrop.map((film) => (
        <tr key={film._id}>
            <td className="fs-6">{film.name}</td>
            <td>
                <Qualitie film={film} />
            </td>
            <td>{film.genereOfFilm.name}</td>
            <td className="text-center">{film.viewed}</td>
            <td className="text-center">{film.rate}</td>
            <td className="text-center">
                {/* <BookMark
                    status={film.bookmark}
                    onToggleBookMark={onToggleBookMark}
                    filmId={film.id}
                /> */}
            </td>
            <td>
                {/* <button
                    className="text-light btn bg-danger"
                    onClick={() => onDelete(film._id)}
                >
                    delete
                </button> */}
            </td>
        </tr>
    ));
};

Film.propTypes = {
    films: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    filmCrop: PropTypes.array.isRequired
};

export default Film;
