import React from "react";
import Cards from "./Cards";


export default function Home(props){

    return(

    <div>
        <h1>Home</h1>
        <Cards characters={props.characters} onClose={props.onClose}/>
    </div>

    )
}