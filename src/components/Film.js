import React from 'react';

const Film = ({name, url}) => {

    return(
        <>
            <li className='film'>
                <a href={url} target='_blank'>{name}</a>
            </li>
        </>
    );

};

export default Film;