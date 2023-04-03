export const genre2 = {
    drama: { _id: "67rdca3eeb7f6fgeed471818", name: "Драма" },
    fantastic: { _id: "67rdca3eeb7f6fgeed471814", name: "Фантастика" },
    thriller: { _id: "67rdca3eeb7f6fgeed471824", name: "Триллер" },
    horror: { _id: "67rdca3eeb7f6fgeed471829", name: "Ужас" },
    comedy: { _id: "67rdca3eeb7f6fgeed472829", name: "Комедия" }
};

export const genre = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Драма" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Фантастика" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Триллер" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Ужас" },
    { _id: "67rdca3eeb7f6fgeed472829", name: "Комедия" }
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
