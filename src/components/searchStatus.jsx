import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastLetter = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "фильмов просмотренно";
    if ([2, 3, 4].indexOf(lastLetter) >= 0) return "фильма просмотренно";
    if (lastLetter === 1) return "фильм просмотренн";
    return "фильмов просмотренно";
  };

  return (
    <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
      {length > 0
        ? `${length} ${renderPhrase(length)}`
        : "вы не просмотрели ни одного фильма ("}
    </span>
  );
};

export default SearchStatus;
