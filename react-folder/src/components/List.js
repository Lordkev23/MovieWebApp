import React, { useEffect, useState } from 'react';

export const List = ({listStaste, setListState}) =>{

    // const [listStaste, setListState] = useState([]);

    useEffect(() =>{
        console.log('componets of movie list charged!');
        getMovies();
    }, []);

    const getMovies = () =>{
        let movies = JSON.parse(localStorage.getItem('newMovie'));

        setListState(movies)
    }

    return(
        <>
            { listStaste != null ? listStaste.map(movie => {
                return(
                    <article key={movie.id} className="movie-item">
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.description}</p>

                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </article>
                );
            }): <h2>There aren't movies to show in this moment</h2>}
        </>
    )
}