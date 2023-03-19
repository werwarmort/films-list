import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const Film = ({ films, onDelete, onToggleBookMark, filmCrop }) => {
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
        <BookMark
          status={film.bookmark}
          onClick={() => onToggleBookMark(film._id)}
        />
      </td>
      <td>
        <button
          className="text-light btn bg-danger"
          onClick={() => onDelete(film._id)}
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default Film;
