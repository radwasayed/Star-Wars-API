import React from 'react';

const VehiclesCard = ({name, model, cost, crew, passengers}) => {
    return (
        <div className="tc fw8 black-90 bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5">
           <h2>{name}</h2>
            <p>Model: {model}</p>
            <p>Cost: {cost}</p>
            <p>Crew: {crew}</p>
            <p>Passengers: {passengers}</p>
        </div>
    )
};

export default VehiclesCard;