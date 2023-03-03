import React, { useState } from "react";
import api from "../api";

const Users = () => {
  console.log(api.films.fetchAll());

  const [films, setFilms] = useState(api.films.fetchAll());

  const handleDelete = (filmId) => {};

  const renderPhrase = (number) => {};

  return (
    <>
      <h1>Users</h1>
    </>
  );
};

export default Users;
