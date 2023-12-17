/* eslint-disable */

import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import api from "../../api";
import { useParams, useNavigate } from "react-router-dom";

const FilmPage = () => {
    const { film } = useParams();

    const [currentFilmId, setCurrentFilmId] = useState();

    const navigate = useNavigate();



    useEffect(() => {
        api.films.getById(film).then((data) => setCurrentFilmId(data));
    }, []);
    console.log(currentFilmId);

    return (
        <div>
            {currentFilmId ? (
                <>
                    <h1>{currentFilmId.name}</h1>
                    <h2>оценки КП: {currentFilmId.rate}</h2>
                    <h2>просмотрен: {currentFilmId.viewed}</h2>
                    <h2>
                        
                        {currentFilmId.qualities.map((qualitie) => (
                            <>
                            <span className={`badge m-1 bg-${qualitie.color}`}>{qualitie.name}</span>
                                
                                
                            </>
                        ))}
                    </h2>
                    <button className='btn m-1 bg-primary text-light' onClick={() => navigate(-1)} >назад</button>
                </>
            ) : (
                <p>loading...</p>
            )}
        </div>
    );
};

export default FilmPage;
