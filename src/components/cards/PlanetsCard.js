import React from 'react';

const PlanetsCard = ({name, rotation_period, orbital_period, climate, gravity, population, terrain}) => {
    return (
        <div className="tc f-1 fw8 black-90 bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <p>Rotation Period: {rotation_period}</p>
            <p>Orbital Period : {orbital_period}</p>
            <p>Climate : {climate}</p>
            <p>Gravity :{gravity}</p>
            <p>Terrain : {terrain}</p>
            <p>Population : {population}</p>
        </div>
    )
};

export default PlanetsCard;

