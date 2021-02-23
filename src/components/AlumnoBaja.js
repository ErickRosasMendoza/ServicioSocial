import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class AlumnoBaja extends React.Component{

    url = Global.url;

    state = {
        idAlumno: this.props.id,
        tipoBaja: {},
        alumno: {},
        statusTipoBaja: null,
    };
      componentWillMount() {
           this.getAlumno();
           this.getTipoBaja();
        }
        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+ this.props.id)
            .then(response => {
            this.setState({
                alumno: response.data,
            });
            } );   
        }//Fin de getAlumno()
    
    getTipoBaja = () => {
        axios.get(this.url +"solicitudBaja/findIdAlumno/"+ this.props.id)
        .then(response => {
        this.setState({
            tipoBaja: response.data,
            statusTipoBaja: 'success'
        });
        } );   
    }//Fin de getTipoBaja()
    
    render(){
        if(this.state.statusTipoBaja == 'success'){
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                        <th className="table_lista">Estado de la Solicitud</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno} {this.state.alumno.nombre}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.tipoBaja.semestre}</td>
                        <td className="table_lista">{this.state.tipoBaja.registroSS}</td>
                        <td className="table_lista">{(() => {  
                                switch (this.state.tipoBaja.estado){
                                case "NUEVO":
                                    return (
                                        <a id="state_new">NUEVO</a>
                                    );
                                break;
                                case "PROCESANDO":
                                    return(
                                        <a id="state_processing">EN PROCESO</a>
                                    ); 
                                    break;  
                                case "FINALIZADO":
                                    return(
                                        <a id="state_finished">TERMINADO</a>   
                                    );
                                case "RECHAZADO":
                                    return(
                                        <a id="state_rejected">RECHAZADO</a>
                                    )
                                default: 
                                    break;
                                }
                                })()}</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="archivosAdminRight">
                    <div className="text_login">
                        <strong>Tipo de Baja:</strong> {this.state.tipoBaja.tipoDeBaja}
                    </div>
                    <div className="text_login">
                        <strong>Programa de Servicio Social:</strong> {this.state.tipoBaja.programaSS}
                    </div>
                    <div className="text_login">
                        <strong>Prestatario:</strong> {this.state.tipoBaja.prestatario}
                    </div>
                    <div className="text_login">
                        <strong>Fecha de Inicio:</strong> {this.state.tipoBaja.fechaInicio}
                    </div>
                    <div className="text_login">
                        <strong>Fehcta de Término:</strong> {this.state.tipoBaja.fechaTermino}
                    </div>
                </div>
            </div>
        );
    }else if(this.state.statusTipoBaja != 'success'){
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                        <th className="table_lista">Estado de la Solicitud</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno} {this.state.alumno.nombre}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">SIN REGISTRO</td>
                        <td className="table_lista">SIN REGISTRO</td>
                        <td className="table_lista">SIN REGISTRO</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="archivosAdminRight">
                    <strong>Este alumno aun no tiene información registrada para este tramite.</strong>
                </div>
            </div>
        );
    }else{
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                        <th className="table_lista">Estado de la Solicitud</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno} {this.state.alumno.nombre}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">Cargando...</td>
                        <td className="table_lista">Cargando...</td>
                        <td className="table_lista">Cargando...</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="archivosAdminRight">
                <strong>Cargando...</strong>
            </div>
            </div>
        );
    }
}//Fin de Render ()
}//Fin de Classs AlumnoBaja
export default AlumnoBaja;