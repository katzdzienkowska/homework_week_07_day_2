import React from 'react';
import Film from './Film';

const FilmsList = ({films}) => {

    const filmsNodes = films.map((film) => {
        return(
            <Film key={film.id} name={film.name} url={film.url}/>
        );
    });

    return(
        <section className='films-list'>
            {filmsNodes}
        </section>
    );
};

export default FilmsList;
