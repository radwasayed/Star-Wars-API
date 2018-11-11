import React from 'react';

const SpeciesCard = ({name, classification, average_height, skin_colors, eye_colors}) => {
    return (
        <div className="tc fw8 black-90 bg-white-80 dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>{name}</h2>
            <p>Classification: {classification}</p>
            <p>Average Height: {average_height}</p>
            <p>Skin Color: {skin_colors}</p>
            <p>Eye Colors: {eye_colors}</p>
        </div>
    )
};

export default SpeciesCard;