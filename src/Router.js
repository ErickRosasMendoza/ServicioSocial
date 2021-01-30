import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';


import Header from './components/Header';
import Slider from './components/Slider';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Pelicula from './components/Pelicula';
import PeliculaReseña from './components/PeliculaReseña';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Blog from './components/Blog';
import Search from './components/Search';
import CreateArticle from './components/CreateArticle';
import CreateUsuario from './components/CreateUsuario';
import ClienteDetalle from './components/ClienteDetalle';




class Router extends React.Component {
    render() {
        var buttonString = "ir a blog";

        return (

            <BrowserRouter>

                <Header />

                
                {/**CONFIGURAR RUTAS Y PAGINAS  */}
                
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path = "/formulario" component = {Formulario}/>
                    <Route exact path="/segunda-ruta" component={MiComponente} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path = "/blog" component = {Blog}/>
                    <Route exact path = "/search/busqueda/:search" component = {Search}/>
                    <Route exact path = "/peliculas/reseña/:id" component = {PeliculaReseña}/>
                    <Route exact path = "/blog/crear" component = {CreateUsuario}/>
                    <Route exact path = "/blog/clienteDetalle/:id" component = {ClienteDetalle}/>
             


                    {/**CONFIGURAR RUTAS Y PAGINAS usando render y props*/}

                    <Route exact path="/sin-componente" render={() => (
                        <React.Fragment>
                            <h1>hola mundo</h1>
                            <h1>hola mundo sin component</h1>
                            <MiComponente saludo="saludo con props" />

                        </React.Fragment>
                    )} />

                    <Route exact path="/parametro/:id/:nombre?" render={(props) => {
                        var id = props.match.params.id;
                        var nombre = props.match.params.nombre;


                        return (
                            <div id="content">
                                <h1 className="subheader" >PAGINA DE PRUEBAS </h1>
                                <p>id: {id}  <br />
                                 nombre: {nombre}
                                </p>


                            </div>
                        );
                    }}
                    />

                    <Route component={Error} />
                    
                </Switch>
               
        <div className="clearfix"></div>
       

      
       
       
      

      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          
          Learn React
          
          
        </a>
        
    
       
      
      <div className="clearfix"></div>
      <Footer/>






            </BrowserRouter>


        );
    }


}
export default Router;