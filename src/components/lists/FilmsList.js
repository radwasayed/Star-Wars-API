import React from 'react';
import FilmCard from '../cards/FilmsCard';

const FilmList = ({films}) => {
    return (
        <div>
            {
                films.map((film, i) => {
                    return (
                        <FilmCard
                            key = {i}
                            title = {films[i].title}
                            episode_id = {films[i].episode_id}
                            release_date = {films[i].release_date}
                            director = {films[i].director}
                        />
                    )
                })
            }
        </div>
    )
};

export default FilmList