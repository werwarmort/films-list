import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggleBookMark, filmId }) => {
    return (
        <button onClick={() => onToggleBookMark(filmId)}>
            <i className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    filmId: PropTypes.string.isRequired
};
export default BookMark;
