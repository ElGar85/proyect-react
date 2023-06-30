import React from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";


export default function Card(props) {
   let id = props.id;
   let onClose = props.onClose
   return (
      <div className={style.contenedor}>
         <button onClick={() => onClose(props.id)}>X</button>
         
         <div className={style.contenedorImg}>
            <h2 className={style.h2style}>{props.id}</h2>
            <Link to={`/detail/${id}`}>
            <img src={props.image} alt={props.name} />
            </Link>
            <h2 className={style.h2nombre}>{props.name}</h2>
         </div>
         <div>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
