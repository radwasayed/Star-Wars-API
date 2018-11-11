import React from 'react';
import PlanetsCard from '../cards/PlanetsCard';

const PlanetsList = ({planets}) => {
    return (
        <div>
            {
               planets.map((planet, i )=> {
                   return (
                       <PlanetsCard
                           key={i}
                           name = {planets[i].name}
                           rotation_period = {planets[i].rotation_period}
                           orbital_period = {planets[i].orbital_period}
                           climate = {planets[i].climate}
                           gravity = {planets[i].gravity}
                           terrain = {planets[i].terrain}
                           population = {planets[i].population}
                       />
                   )
               })
            }
        </div>
    )
};

export default PlanetsList;