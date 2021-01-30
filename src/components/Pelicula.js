import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Pelicula extends React.Component {

    marcarFavorita = () =>{
       
        this.props.marcar(this.props.pelicula);
        
       
    }
    
    render() {
        const { titulo, Image,id } = this.props.pelicula;
        const pelicula = this.props.pelicula;
       
        

       
        return (
            <article className="article-item">
                <div className="image-wrap">
                   
                <img src={Image} alt={titulo} />
                   
                </div>
                
                <h2>{titulo}</h2>
                <span className="date">
                    hace 5 minutos
                </span>
                <Link to = {'/peliculas/reseña/' + pelicula.id} >leer más</Link>
                <button onClick = {this.marcarFavorita}>
                    Maracar como favorita
                </button>

                <div className="clearfix"></div>
            </article>


        );

    }
}

export default Pelicula;