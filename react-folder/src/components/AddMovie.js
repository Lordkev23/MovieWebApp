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

        //create object about save movie
        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description
        }
        
        setMovieState(movie);
    }

    return(
    <>
        <div className="add">
                <h3 className="title">{title}</h3>

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