import React,{useEffect, useState} from "react";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import './App.css';
import Nav from './components/Nav';
import About from "./components/About";
import Home from "./components/Home";
import Detail from "./components/Detail";
import FormLogin from "./components/FormLogin/FormLogin";
import Favoritos from "./components/Favoritos/Favoritos";



function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   const email = 'ejemplo@gmail.com'
   const password='12345678'

   function login (useData){
      if(useData.password === password && useData.email=== email){
         setAccess(true)
         navigate('/home');
      }else {
         alert('em@il o password incorrecto');
      }
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   function onSearch(id) {
      // let existe = true;
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((resp) => {
         if(resp.data.character.name){
            
         //    if (data.name) {
         //       setCharacters((oldChars) => [...oldChars, data]);
         //    } else {
         //       window.alert('¡No hay personajes con este ID!');
         //    }
         // }else{
         //    characters.map((character) => {
         //       if (character.id !== data.id) {
         //            existe = false;
         //          }
         //       else{
         //          window.alert('¡ya existe personaje!');
         //       }
         //    })

         setCharacters((oldChars) => [...oldChars, resp.data.character]);
      } else {
      }
    })
    .catch((err) => alert('¡No hay personajes con este ID!'));
   }

   const onClose = (id) => {
      //  window.alert('Cerrar')
      setCharacters(characters.filter((perso) => {
         return perso.id !== Number(id)
      }))
   }

   const [characters,setCharacters] = useState([]);

   const location = useLocation();

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
         <Routes>
            <Route path="/" element={<FormLogin login={login}/>} />
            <Route path="home" element={<Home characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />}/>
            <Route path="/favoritos" element={<Favoritos />}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>  
      </div>
   );
}


export default App;
