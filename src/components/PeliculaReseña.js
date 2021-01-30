import React from 'react';

import Slider from './Slider';
import SideBar from './SideBar';
import Clientes from './Clientes';
import Peliculas from './Peliculas';
import Pelicula from './Pelicula';

class PeliculaReseña extends React.Component {



    render() {






        return (
            <div id="reseña">

                <Slider
                    title="Batman"

                    size="slider-small"
                />
                <div id="center">


                  <h1>esta es la pagina de reseñas de peliculas  </h1>
                  



                </div>
                <Peliculas/>
                <SideBar
                    blog="true"
                />


            </div>


        );

    }

}

export default PeliculaReseña;