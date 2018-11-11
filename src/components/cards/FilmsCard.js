import React from 'react';

const FilmsCard = ({title, episode_id, release_date, director}) => {
    return (
        <div className="tc fw8 black-90 bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{title}</h2>
            <p>Episode : {episode_id}</p>
            <p>Release Date : {release_date}</p>
            <p>Director : {director}</p>
        </div>
    )
};

export default FilmsCard;