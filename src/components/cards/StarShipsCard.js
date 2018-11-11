import React from 'react';

const StarShipsCard = ({name, model, manufacturer, cost, starship_class}) => {
    return (
        <div className="tc fw8 black-90 bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost: {cost}</p>
            <p>StarShip Class: {starship_class}</p>
        </div>
    )
};

export default StarShipsCard;