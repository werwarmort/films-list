export const genre = {
    drama: { _id: "67rdca3eeb7f6fgeed471818", name: "Драма" },
    // fantasy: { _id: "67rdca3eeb7f6fgeed471820", name: "Фэнтези" },
    fantastic: { _id: "67rdca3eeb7f6fgeed471814", name: "Фантастика" },
    thriller: { _id: "67rdca3eeb7f6fgeed471824", name: "Триллер" },
    horror: { _id: "67rdca3eeb7f6fgeed471829", name: "Ужас" },
    comedy: { _id: "67rdca3eeb7f6fgeed472829", name: "Комедия" }
};

export const genre2 = [
    { _id: "67rdca3eeb7f6fgeed471818", nameOfGenre: "drama", name: "Драма" },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        genereOfFilm: "fantasy",
        name: "Фэнтези"
    },
    // {
    //     _id: "67rdca3eeb7f6fgeed471814",
    //     genereOfFilm: "fantastic",
    //     name: "Фантастика"
    // },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        genereOfFilm: "thriller",
        name: "Триллер"
    },
    { _id: "67rdca3eeb7f6fgeed471829", genereOfFilm: "horror", name: "Ужас" },
    { _id: "67rdca3eeb7f6fgeed472829", genereOfFilm: "comedy", name: "Комедия" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(genre);
        }, 1000);
    });

export default {
    fetchAll
};
