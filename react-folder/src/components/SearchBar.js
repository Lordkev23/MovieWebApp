import React from "react";

export const SearchBar =()=>{
    return(
        <>
            <div className="search">
                <h3 className="title">Browser</h3>
                <form>
                    <input type="text" id="search_field"/>
                    <button id="search">Search</button>
                </form>
            </div>
        </>
    )
}