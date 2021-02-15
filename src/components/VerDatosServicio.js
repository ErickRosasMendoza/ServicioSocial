import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class VerDatosServicio extends React.Component{

    url = Global.url;

    state = {
        servicio: {},
        idAlumno: cookies.get('idAlumno'),
        status: null
    };
        componentWillMount() {
            this.getServicio();
        }

        getServicio = () => {
            axios.get(this.url +"servicioSocial/findIdAlumno/" + this.state.idAlumno)
            .then(res => {
                    this.setState({
                        servicio: res.data,
                        status: 'success'
                       });
            });
        }//Fin de funcion getServicio()
        
    render() {
        if(this.state.status == 'success'){
            return(
                <div className="center">
                        <div id="sidebar" className="servicioCenter">
                            <div className="text_login">
                                Responsable Directo: {this.state.servicio.responsableDirecto}
                            </div>
                            <div className="text_login">
                                Semestre: {this.state.servicio.semestre}
                            </div>
                            <br/>
                            <button className="btn"  onClick = {this.upLoad}>Generar PDF</button> 
                        </div>          
            </div>
            );
        }else{ 
            return(
                <div className="center">
                        <div id="sidebar" className="servicioCenter">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación SERVICIO SOCIAL.
                            </div>
                        </div>          
            </div>
            );
        }//Fin de else status == 'success'
}//Fin de Render ()
}//Fin de Classs VerDatosServicio

export default VerDatosServicio;