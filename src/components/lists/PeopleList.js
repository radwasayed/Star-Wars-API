import React from 'react';
import PeopleCard from '../cards/PeopleCard';

const PeopleList = ({people}) => {
    return (
        <div>
            {
                people.map((person, i) => {
                    return (
                        <PeopleCard
                        key        = {i}
                        name       = {people[i].name}
                        birth_year = {people[i].birth_year}
                        height     = {people[i].height}
                        mass       = {people[i].mass}
                        gender     = {people[i].gender}
                        />
                    );
                })
            }
        </div>
    )
};

export default PeopleList;