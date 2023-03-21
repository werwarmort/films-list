import { genre } from "./genre.api";

const qualities = {
    long: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Долгий",
        color: "primary"
    },
    interesting: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "интересный",
        color: "secondary"
    },
    funny: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Драйвовый",
        color: "success"
    },
    alone: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Для одного",
        color: "danger"
    },
    chiling: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Расслабляющий",
        color: "info"
    },
    godnota: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Годно",
        color: "dark"
    }
};

const films = [
    {
        _id: "11rdca3eeb7f6fgeed471815",
        name: "Побег из Шоушенка (1994)",
        genereOfFilm: genre.drama,
        qualities: [qualities.godnota, qualities.alone],
        viewed: 3,
        rate: 9.1,
        bookmark: true
    },
    {
        _id: "1111ca3eefjf6fgeed471815",
        name: "Форрест Гамп (1994)",
        genereOfFilm: genre.drama,
        qualities: [qualities.funny, qualities.chiling],
        viewed: 2,
        rate: 8.9,
        bookmark: false
    },
    {
        _id: "1111113eefjf6fgffd471815",
        name: "Интерстеллар (2014)",
        genereOfFilm: genre.fantastic,
        qualities: [qualities.alone, qualities.godnota, qualities.long],
        viewed: 2,
        rate: 8.6,
        bookmark: false
    },
    {
        _id: "11111111efjf6fgffd471815",
        name: "Назад в будущее (1985)",
        genereOfFilm: genre.fantastic,
        qualities: [qualities.funny, qualities.interesting],
        viewed: 1,
        rate: 8.6,
        bookmark: false
    },
    {
        _id: "1111111111jf6fgffd471815",
        name: "Бойцовский клуб (1999)",
        genereOfFilm: genre.thriller,
        qualities: [qualities.funny, qualities.godnota, qualities.interesting],
        viewed: 3,
        rate: 8.7,
        bookmark: false
    },
    {
        _id: "1111111111116fgffd471815",
        name: "1+1 (2011)",
        genereOfFilm: genre.drama,
        qualities: [qualities.alone, qualities.godnota],
        viewed: 3,
        rate: 8.8,
        bookmark: false
    },
    {
        _id: "11111111111111gffd471815",
        name: "Пираты Карибского моря: Проклятие Черной жемчужины (2003)",
        genereOfFilm: genre.drama,
        qualities: [qualities.funny, qualities.interesting],
        viewed: 3,
        rate: 8.8,
        bookmark: false
    },
    {
        _id: "1111111111111111fd471815",
        name: "Гладиатор (2000)",
        genereOfFilm: genre.drama,
        qualities: [qualities.alone, qualities.interesting, qualities.godnota],
        viewed: 2,
        rate: 8.6,
        bookmark: false
    },
    {
        _id: "111111111111111111471815",
        name: "Терминатор 2",
        genereOfFilm: genre.drama,
        qualities: [qualities.funny, qualities.interesting],
        viewed: 2,
        rate: 8.3,
        bookmark: false
    },
    {
        _id: "111111111111111111111815",
        name: "Поймай меня, если сможешь (2002)",
        genereOfFilm: genre.comedy,
        qualities: [qualities.funny, qualities.interesting, qualities.godnota],
        viewed: 3,
        rate: 8.6,
        bookmark: false
    },
    {
        _id: "111111111111111111111115",
        name: "Выстрел в пустоту (2015)",
        genereOfFilm: genre.drama,
        qualities: [qualities.alone, qualities.interesting, qualities.godnota],
        viewed: 1,
        rate: 7.5,
        bookmark: false
    },
    {
        _id: "221111111111111111111112",
        name: "Прочь (2017)",
        genereOfFilm: genre.horror,
        qualities: [qualities.interesting],
        viewed: 1,
        rate: 7.5,
        bookmark: false
    },
    {
        _id: "222211111111111111111112",
        name: "Джиперс Криперс (2001)",
        genereOfFilm: genre.horror,
        qualities: [qualities.interesting],
        viewed: 3,
        rate: 6.8,
        bookmark: false
    },
    {
        _id: "222222111111111111111112",
        name: "Волк с Уолл-стрит (2013)",
        genereOfFilm: genre.comedy,
        qualities: [qualities.interesting, qualities.godnota, qualities.funny],
        viewed: 4,
        rate: 8,
        bookmark: false
    },
    {
        _id: "222222221111111111111112",
        name: "В погоне за счастьем (2006)",
        genereOfFilm: genre.drama,
        qualities: [qualities.interesting, qualities.alone],
        viewed: 4,
        rate: 8,
        bookmark: false
    },
    {
        _id: "222222222211111111111112",
        name: "Драйв (2011)",
        genereOfFilm: genre.drama,
        qualities: [qualities.interesting, qualities.alone, qualities.long],
        viewed: 1,
        rate: 7.3,
        bookmark: false
    },
    {
        _id: "222222222222111111111112",
        name: "Бегущий по лезвию 2049 (2017)",
        genereOfFilm: genre.fantastic,
        qualities: [
            qualities.interesting,
            qualities.alone,
            qualities.long,
            qualities.godnota
        ],
        viewed: 1,
        rate: 7.8,
        bookmark: false
    },
    {
        _id: "222222222222221111111112",
        name: "Аватар (2009)",
        genereOfFilm: genre.fantastic,
        qualities: [qualities.interesting, qualities.alone, qualities.long],
        viewed: 4,
        rate: 8.0,
        bookmark: false
    }
];

// const fetchAll = () => {
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(films);
//         }, 1000);
//     });
// };

// export default {
//     fetchAll
// };

export function fetchAll() {
    return films;
}
