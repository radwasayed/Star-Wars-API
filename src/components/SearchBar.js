import React from 'react';

const SearchBar = ({searchfield, searchChange}) => {
    return (
        <div className='pa5'>
            <input
                className='pa3 ba br3 b--solid-m bg-light-silver'
                type="search"
                placeholder="search "
                onChange={searchChange}
            />
        </div>

    );
};

export default SearchBar;