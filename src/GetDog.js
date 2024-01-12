import React from "react";
import dogsList from "./allDogs";
import DogDetails from "./Dog";
import { useParams, Navigate } from "react-router-dom";

const GetDog = () =>{
    const {dogName} = useParams();
    if(dogName){
    const curr_dog = dogsList.find(dog => 
        dog.name.toLowerCase() === dogName.toLowerCase())

        if(curr_dog){     
            return(
            <DogDetails dog={curr_dog} />
            )}

            else{ return <Navigate to="/dogs" />}

    }
}

export default GetDog;