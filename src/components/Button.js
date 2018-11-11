import React from 'react';


const Button = ({value, onButtonPress}) => {
    return (
        <button
                className="f3 b--green hover-bg-black-90 grow tc ma2 pa3 link bg-black-40 ba-2 b--solid br3 shadow-4 pointer"
                onClick={onButtonPress}
        >
            {value}
        </button>
    )
};

export default Button;