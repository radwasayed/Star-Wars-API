import React from 'react';
import Button from './Button';
import './Nav.css';

const Nav = ({names, onButtonPress}) => {
    return (
        <div>
            {
                Object.values(names).map((name, i) => {
                    return (
                        <Button
                            key={i}
                            value={name}
                            onButtonPress={() => onButtonPress(name)}
                        />
                    )
                })
            }
        </div>
    )

};

export default Nav;