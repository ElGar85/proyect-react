import React, { useEffect,useState} from "react";
import axios from "axios";
import { useParams,  } from "react-router-dom";
import style from "./Home.module.css"
import style1 from "./Detail.module.css"

export default function Detail(){
    const {id} = useParams();

    const [pjDetalle,setPjDetalle]= useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
      if (data.name) {
         setPjDetalle(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   
    },[id])


return (

    
    <div className={style1.contenedor}>
        <h1 className={style.titulo}>Detalle del personaje:</h1>
        <h3>{pjDetalle.name}</h3>
        <h3>{pjDetalle.status}</h3>
        
        <img src={pjDetalle.image} alt={pjDetalle.name} />
    </div>
)


}