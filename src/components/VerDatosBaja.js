import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class VerDatosBaja extends React.Component{

    url = Global.url;

    state = {
        tipoBaja: {},
        idAlumno: cookies.get('idAlumno'),
        status: null
    };
        componentWillMount() {
            this.getBaja();
        }

        getBaja = () => {
            axios.get(this.url +"solicitudBaja/findIdAlumno/" + this.state.idAlumno)
            .then(res => {
                    this.setState({
                        tipoBaja: res.data,
                        status: 'success'
                       });
            });
        }//Fin de funcion getBaja()
        
    render() {
        if(this.state.status == 'success'){
            if(this.state.tipoBaja.egresado == false){
                return(
                    <div className="center">
                    <section id="content">
                            <div id="sidebar" className="bajaCenter">
                                <div className="text_login">
                                   Registro de Servicio Social: {this.state.tipoBaja.registroSS}
                                </div>
                                <div className="text_login">
                                    Programa de ServicioSocial: {this.state.tipoBaja.programaSS}
                                </div>
                                <div className="text_login">
                                    Prestatario: {this.state.tipoBaja.prestatario}
                                </div>
                                <div className="text_login">
                                    Fecha de Inicio: {this.state.tipoBaja.fechaInicio}
                                </div>
                                <div className="text_login">
                                    Fecha de Término: {this.state.tipoBaja.fechaTermino}
                                </div>
                                <div className="text_login">
                                    Tipo de Baja: {this.state.tipoBaja.tipoBaja}
                                </div>
                                <div className="text_login">
                                    Egresado: No, No soy EGRESADO
                                </div>
                                <div className="text_login">
                                    Semestre: {this.state.tipoBaja.semestre}
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
                            <div id="sidebar" className="bajaCenter">
                                <div className="text_login">
                                   Registro de Servicio Social: {this.state.tipoBaja.registroSS}
                                </div>
                                <div className="text_login">
                                    Programa de ServicioSocial: {this.state.tipoBaja.programaSS}
                                </div>
                                <div className="text_login">
                                    Prestatario: {this.state.tipoBaja.prestatario}
                                </div>
                                <div className="text_login">
                                    Fecha de Inicio: {this.state.tipoBaja.fechaInicio}
                                </div>
                                <div className="text_login">
                                    Fecha de Término: {this.state.tipoBaja.fechaTermino}
                                </div>
                                <div className="text_login">
                                    Tipo de Baja: {this.state.tipoBaja.tipoBaja}
                                </div>
                                <div className="text_login">
                                    Egresado: Sí, Sí soy EGRESADO
                                </div>
                                <br/>
                                <button className="btn"  onClick = {this.upLoad}>Generar PDF</button> 
                            </div>          
                    </section>
                </div>
                );
            }//Fin de else egresado
        }else{
            return(
                <div className="center">
                <section id="content">
                        <div id="sidebar" className="bajaCenter">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación BAJA DE SERVICIO SOCIAL.
                            </div>
                        </div>          
                </section>
            </div>
            );
        }//Fin de else status == 'success'
}//Fin de Render ()
}//Fin de Classs VerDatosBaja

export default VerDatosBaja;