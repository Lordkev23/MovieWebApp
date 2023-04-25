import React, { useState } from "react";

export const SearchBar = ({listState, setListState})=>{

    const [search, setSearch] = useState('');

    const searchMovie = (event) =>{
        //Make a state and refresh
        setSearch(event.target.value)

        //complete list of movies
        let movies_searched = listState.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        })

        //filter to search matches
        if(search.length <= 1 || movies_searched <= 0){
            movies_searched = JSON.parse(localStorage.getItem('newMovie'));
        }

        //check if there is a result

        //give value from all in localstorage

        //refresh main list state with the filtered
        setListState(movies_searched)
    }

    return(
        <>
            <div className="search">
                <h3 className="title">Browser</h3>
                <form>
                    <input type="text"
                           id="search_field" 
                           name='search' 
                           autoComplete='off' 
                           value={search}
                           onChange={searchMovie}
                    />
                    <button id="search">Search</button>
                </form>
            </div>
        </>
    )
}