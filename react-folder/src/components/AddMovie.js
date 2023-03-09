import React from "react";

export const AddMovie = () =>{
    return(
    <>
        <div className="add">
                <h3 className="title">Add Movie</h3>
                <form>
                    <input type="text" id="title" placeholder="Title"/>
                    <textarea id="description" placeholder="Description"></textarea>
                    <input type="submit" id="save" value="Save"/>
                </form>
            </div>
    </>
    )
}