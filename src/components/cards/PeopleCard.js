import React from 'react';

const PeopleCard = ({name, height, mass, gender,birth_year}) => {
    return (
        <div className="tc fw8 black-90 bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <p>Birth Year: {birth_year}</p>
            <p>Height: {height} CM</p>
            <p>Weight: {mass} KG</p>
            <p>Gender: {gender}</p>
        </div>
    )
};

export default PeopleCard;