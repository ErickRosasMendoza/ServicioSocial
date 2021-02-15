import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class VerDatosDictamen extends React.Component{

    url = Global.url;

    state = {
        dictamen: {},
        idAlumno: cookies.get('idAlumno'),
        status: null
    };
        componentWillMount() {
            this.getDictamen();
        }

        getDictamen = () => {
            axios.get(this.url +"dictamen/findIdAlumno/" + this.state.idAlumno)
            .then(res => {
                    this.setState({
                        dictamen: res.data,
                        status: 'success'
                       });
            });
        }//Fin de funcion getDictamen()
        
    render() {
        if(this.state.status == 'success'){
            return(
                <div className="center">
                <section id="content">
                        <div id="sidebar" className="dictamenCenter">
                            <div className="text_login">
                                Procentaje de creditos: {this.state.dictamen.porcentajeCreditos}
                            </div>
                            <div className="text_login">
                                Semestre: {this.state.dictamen.semestre}
                            </div>
                            <br/>
                            <button className="btn"  onClick = {this.upLoad}>Generar PDF</button> 
                        </div>          
                </section>
            </div>
            );
        }else{
            return(
                <div className="center">
                <section id="content">
                        <div id="sidebar" className="dictamenCenter">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación de DICTAMEN DE MENOS DE 70% DE CREDITOS.
                            </div>
                        </div>          
                </section>
            </div>
            );
        }//Fin de else status == 'success'
}//Fin de Render ()
}//Fin de Classs VerDatosDictamen

export default VerDatosDictamen;