export const genre = {
    drama: { _id: "67rdca3eeb7f6fgeed471818", name: "Драма" },
    fantasy: { _id: "67rdca3eeb7f6fgeed471820", name: "Фэнтези" },
    fantastic: { _id: "67rdca3eeb7f6fgeed471814", name: "Фантастика" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Особый" },
    thriller: { _id: "67rdca3eeb7f6fgeed471824", name: "Триллер" },
    horror: { _id: "67rdca3eeb7f6fgeed471829", name: "Ужас" },
    comedy: { _id: "67rdca3eeb7f6fgeed472829", name: "Комедия" }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(genre);
        }, 1000);
    });

export default {
    fetchAll
};
