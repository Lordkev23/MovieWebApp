import React, { useEffect, useState } from 'react';
import { Edit } from './Edit';

export const List = ({listStaste, setListState}) =>{

    // const [listStaste, setListState] = useState([]);

    const [edit, setEdit] = useState(0);

    useEffect(() =>{
        console.log('componets of movie list charged!');
        getMovies();
    }, []);

    const getMovies = () =>{
        let movies = JSON.parse(localStorage.getItem('newMovie'));

        setListState(movies)

        return movies;
    }

    const deleteMovie = (id)=>{
        //get movies saved
        let movies_saved = getMovies()

        //filter that movies to eliminate some of them than I don't need from the array
        let new_movieArray = movies_saved.filter((movie)=>movie.id !== parseInt(id));

        //Refresh listState
        setListState(new_movieArray)

        //Refresh dats in the localStorage
        localStorage.setItem('newMovie', JSON.stringify(new_movieArray))
    }

    return(
        <>
            { listStaste != null ? listStaste.map(movie => {
                return(
                    <article key={movie.id} className="movie-item">
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.description}</p>

                    <button className="edit" onClick={()=> setEdit(movie.id)}>Edit</button>
                    <button className="delete" onClick={()=> deleteMovie(movie.id)}>Delete</button>

                    {/*appear edit form*/}
                    {edit === movie.id && (
                        <Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState}/>
                    )}

                </article>
                );
            }): <h2>There aren't movies to show in this moment</h2>}
        </>
    )
}