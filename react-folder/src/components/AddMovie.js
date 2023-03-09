import React, { useState } from "react";

export const AddMovie = () =>{

    const title = "Add Movie";

    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    });

    const getFormData = (event)=>{
        event.preventDefault();

        

        //get form data
        let target = event.target;
        let title = target.title.value;
        let description = target.description.value;
alert(title + " " + description)
        //create object about save movie
        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description
        }

        
        //Save State
        setMovieState(movie);
console.log(movieState);
        //Save in local Storage
        saveInStorage(movie);
    }

    const saveInStorage = (movie)=>{
        //get elements that are already in local storage
        let elements = JSON.parse(localStorage.getItem("newMovie"));

        //check if it is an array
        if(Array.isArray(elements)){
            //add inside the array a new element
            elements.push(movie);
        } else{
            //create an array with the new movie
            elements= [movie];
        }
// console.log(elements);
        //Save in localStorage
        localStorage.setItem("newMovie", JSON.stringify(elements));

        // console.log(elements);

        //return save object
        return movie;
    }

    return(
    <>
        <div className="add">
                <h3 className="title">{title}</h3>

                <strong>
                    {(movieState.title && movieState.description) && "Movie Created: " + movieState.title}
                </strong>
                

                <form onSubmit={getFormData}>
                    <input type="text"
                            id="title"
                            name="title"
                            placeholder="Title"/>

                    <textarea id="description"
                                name="description"
                               placeholder="Description"></textarea>

                    <input type="submit"
                            id="save"
                            value="Save"/>
                </form>
            </div>
    </>
    )
}