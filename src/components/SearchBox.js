import React from 'react';
/*ogni volta che ci sono cambiamenti OnChange chiama la funzione indicata*/
const SearchBox = ({ searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green pg-lighest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}


export default SearchBox;

