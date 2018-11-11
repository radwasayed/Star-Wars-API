import React from 'react';
import SpeciesCard from '../cards/SpeciesCard';

const SpeciesList = ({species}) => {
    return (
        <div>
            {
                species.map((specie, i) => {
                    return (
                        <SpeciesCard
                            key = {i}
                            name = {species[i].name}
                            classification = {species[i].classification}
                            average_height = {species[i].average_height}
                            skin_colors = {species[i].skin_colors}
                            eye_colors = {species[i].eye_colors}
                            homeworld = {species[i].homeworld}
                        />
                    )
                })
            }
        </div>
    )
};

export default SpeciesList