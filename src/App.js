import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Router from './Router';

function App() {
  
  return (
    <div className="App">

       <Router/>

    </div>
  );
}

export default App;
