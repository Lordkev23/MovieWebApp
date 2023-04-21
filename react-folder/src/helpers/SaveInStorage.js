export const SaveInStorage = (key, element)=>{
    //get elements that are already in local storage
    let elements = JSON.parse(localStorage.getItem(key));

console.log(elements);

    //check if it is an array
    if(Array.isArray(elements)){
        //add inside the array a new element
        elements.push(element);
    } else{
        //create an array with the new movie
        elements= [element];
    }

    //Save in localStorage
    localStorage.setItem(key, JSON.stringify(elements));

    // console.log(elements);

    //return save object
    return element;
}