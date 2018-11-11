import React from 'react';
import StarShipsCard from '../cards/StarShipsCard';

const StarShipsList = ({starships}) => {
    return (
        <div>
            {
                starships.map((starship, i) => {
                    return (
                        <StarShipsCard
                            key = {i}
                            name = {starships[i].name}
                            model = {starships[i].model}
                            manufacturer = {starships[i].manufacturer}
                            cost = {starships[i].cost_in_credits}
                            starship_class = {starships[i].starship_class}
                        />
                    )
                })
            }
        </div>
    )
};
export default StarShipsList;