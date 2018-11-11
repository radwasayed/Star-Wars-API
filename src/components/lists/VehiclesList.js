import React from 'react';
import VehiclesCard from '../cards/VehiclesCard';

const VehiclesList = ({vehicles}) => {
    return (
        <div>
            {
                vehicles.map((vehicle,i) => {
                    return (
                        <VehiclesCard
                            key   = {i}
                            name  = {vehicles[i].name}
                            model = {vehicles[i].model}
                            cost  = {vehicles[i].cost_in_credits}
                            crew  = {vehicles[i].crew}
                            passengers = {vehicles[i].passengers}
                        />
                    )
                })
            }
        </div>
    )
};

export default VehiclesList;