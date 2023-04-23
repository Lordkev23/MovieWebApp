import React, { useState } from "react";
import { SaveInStorage } from "../helpers/SaveInStorage";

export const AddMovie = ({setListState}) =>{

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

        //Refresh state of principal list
        setListState((elements)=>{
            return[...elements, movie];
        });

        //Save in local Storage
        SaveInStorage("newMovie", movie);
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