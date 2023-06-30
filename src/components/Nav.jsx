import React from "react";
import style from "./Nav.module.css"
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';

const Nav = (props) => {

    return (
        <div className={style.contenedorNav}>
            <Link to="/">BINEVENIDO</Link>
            <Link to="/about">ACERCA</Link>
            <Link to="/home">INICIO</Link>
            <Link to="/crear">CREAR PERSONAJE</Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}


export default Nav;