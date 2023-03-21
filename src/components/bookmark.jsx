import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status }) => {
    return (
        <button>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};
export default BookMark;
