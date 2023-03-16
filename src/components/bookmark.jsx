import React from "react";

const BookMark = ({ status, rest }) => {
  return (
    <button {...rest}>
      {/* {status === false ? (
        <i className="bi bi-bookmark"></i>
      ) : (
        <i className="bi bi-bookmark-fill"></i>
      )} */}
      <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
