import React from 'react';

import Slider from './Slider';
import SideBar from './SideBar';
import Clientes from './Clientes';

class Search extends React.Component {



    render() {






        return (
            <div id="blog">

                <Slider
                    title="Busqueda"

                    size="slider-small"
                />
                <div id="center">


                    <Clientes />



                </div>
                <SideBar
                    blog="true"
                />


            </div>


        );

    }

}

export default Search;