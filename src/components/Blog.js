import React from 'react';

import Slider from './Slider';
import SideBar from './SideBar';
import Clientes from './Clientes';

class Blog extends React.Component {



    render() {






        return (
            <div id="blog">

                <Slider
                    title="Alumnos"

                    size="slider-small"
                />
                <div id="item-lista">


                    <Clientes />



                </div>
                <SideBar
                    blog="true"
                />


            </div>


        );

    }

}

export default Blog;