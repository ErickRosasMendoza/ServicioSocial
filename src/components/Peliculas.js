import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import SideBar from './SideBar';


class Peliculas extends React.Component{
    state = {
        peliculas: [
            { titulo: "BATMAN",id: 1, Image: 'https://i2.wp.com/wipy.tv/wp-content/uploads/2020/07/fan-art-de-robert-pattinson-como-batman-earth-2.jpg?w=1000&ssl=1' },
            { titulo: "GRAN TORINO",id: 2, Image: 'https://static3.abc.es/media/play/2018/01/30/gran-torino-k2oD--620x349@abc.jpg' },
            { titulo: "JOKER",id: 3, Image:'https://i.blogs.es/a78b2a/maxresdefault/1366_2000.jpg' }

        ],
        nombre: "Luis Gervacio",
        favorita: {}
    };

    cambiarTitulo = () => {

        var {peliculas} = this.state;
        peliculas[0].titulo = "BATMAN BEGGINS ";

        this.setState({
            peliculas:peliculas

        });

    }

    favorita = (pelicula) => {
        console.log("favorita marcada");
        console.log(pelicula);
       
        this.setState ({
            favorita: pelicula

        });
    }
/*DIDMOUNT ES CUANDO YA SE MUESTRA EL CONTENIDO EN LA PNTALLA 
    componentDidMount(){
        alert("SE ACABA DE MONTAR EL COMPONENTE DE PELICULAS");
    }
    componentWillMount(){
        alert("se va amontar el componente");
    }*/

 /* EVENTO DE CICLO DE VIDA RENDER OBLIGATORIO */
    render() {
      
        var estilos = {
            background:'red',
            color: 'white',
            
        };
        /*CONDICIONAL JS */
        var favorita;
        if( this.state.favorita.titulo){
           favorita = (
                    <p style = {estilos}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo + this.state.favorita.id}</span>
                     </p>
           );
        }else{
            favorita = (
                <p>no hay pelicula favorita</p>
            );
        }
       
 


        return (
            <React.Fragment>
            <Slider
            title = "Peliculas"
            size = "slider-small"
            />
            <div className="center">
               
                <a> Seleccion de las peliculas favoritas de {this.state.nombre}</a>
                <div>
                   
                    <button onClick = {this.cambiarTitulo}>
                    cambiar titulo
                    </button>

                </div>
               {/* CONDICIONAL Y ESTILOS CSS 
                
                this.state.favorita.titulo &&
                <p style = {estilos}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
                 */}

                 {favorita}
        
            <div id="articles" className = "peliculas">
                {
                    this.state.peliculas.map((pelicula,i)=>{
                        return(

                           <Pelicula 
                           key={i} 
                            pelicula={pelicula}
                            marcar = {this.favorita}
                            
                           
                           
                             
                            />


                        )

                    })









                }
            </div>
            </div>
            </React.Fragment>

            

        );
    }
}

export default Peliculas;