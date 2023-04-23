import React from "react";

export const Edit = ({movie, getMovies, setEdit, setListState})=>{

    const title_component = 'Edit Movie';

    const editSaved = (event, id)=>{
        event.preventDefault();
        
        //Get the event target
        let target = event.target

        //Search index of the movie object than be refresh
        const stored_movies = getMovies()
        const index = stored_movies.findIndex(movie => movie.id === id);
        
        //Make an object with the id of that index, title and description form
        let movie_refreshed = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        //Refresh element with that index
        stored_movies[index] = movie_refreshed;

        //Saved the new object array in localStorage
        localStorage.setItem('newMovie', JSON.stringify(stored_movies))

        //and refresh states
        setListState(stored_movies);
        setEdit(0);
    }

    return(
        <div className="edit_form">
            <h3 className="title">{title_component}</h3>
            <form onSubmit={(event)=>editSaved(event, movie.id)}>
                <input type="text" name="title" className="edit_title" defaultValue={movie.title}/>
                <textarea name="description" defaultValue={movie.description} className="edit_description"/>
                <input type="submit" className="edit" value='Refresh'/>
            </form>
        </div>
    )
} 