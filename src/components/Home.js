import React from 'react';
import Slider from './Slider';
import SideBar from './SideBar';

class Home extends React.Component{
        render(){

            return(
                <React.Fragment>

                <Slider
                title="Hola Mundo con React JS"
                btn="Alumnos"
                   />
                 <section id="content">

                    <h1 className = "subheader">Lenguajes de Internet</h1>
                 </section>
                

                </React.Fragment>


            );

        }

}

export default Home;