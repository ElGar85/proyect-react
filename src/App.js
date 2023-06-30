import React,{useState} from "react";
import { Routes, Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Nav from './components/Nav';
import About from "./components/About";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Form from "./components/Form/Form";



function App() {

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      //  window.alert('Cerrar')
      setCharacters(characters.filter((perso) => {
         return perso.id !== Number(id)
      }))
   }

   const [characters,setCharacters] = useState([]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/" element={<h1>Bienvenidos</h1>}/>
            <Route path="home" element={<Home characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />}/>
            <Route path="/crear" element={<Form />}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>  
      </div>
   );
}

export default App;
