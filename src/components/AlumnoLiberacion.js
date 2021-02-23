import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class AlumnoLiberacion extends React.Component{

    url = Global.url;

    state = {
        idAlumno: this.props.id,
        liberacion: {},
        alumno: {},
        statusLiberacion: null,
    };
        componentWillMount() {
            this.getAlumno();
            this.getliberacion();
        }

        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+ this.props.id)
            .then(response => {
            this.setState({
                alumno: response.data,
                status: 'success'
            });
            } );   
        }//Fin de getAlumno()
    
    getliberacion = () => {
        axios.get(this.url +"liberacionExtemporanea/findIdAlumno/"+ this.props.id)
        .then(response => {
        this.setState({
            liberacion: response.data,
            statusLiberacion: 'success'
        });
        } );   
    }//Fin de getLiberacion()
    
    render(){
        if(this.state.statusLiberacion == 'success'){
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                        <td className="table_lista">Estado de la Solicitud</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno} {this.state.alumno.nombre}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.liberacion.semestre}</td>
                        <td className="table_lista">{this.state.liberacion.registroSS}</td>
                        <td className="table_lista">{(() => {  
                                switch (this.state.liberacion.estado){
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
                        <strong>Programa de Servicio Social:</strong> {this.state.liberacion.programaSS}
                    </div>
                    <div className="text_login">
                        <strong>Prestatario:</strong> {this.state.liberacion.prestatario}
                    </div>
                    <div className="text_login">
                        <strong>Fecha de Inicio:</strong> {this.state.liberacion.fechaInicio}
                    </div>
                    <div className="text_login">
                        <strong>Fecha de Término:</strong> {this.state.liberacion.fechaTermino}
                    </div>
                    <div className="text_login">
                        <strong>Número Telefónico:</strong> {this.state.liberacion.telefono}
                    </div>
                </div>
            </div>
        );
    }else if(this.state.statusLiberacion != 'success'){
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                        <td className="table_lista">Estado de la Solicitud</td>
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
                        <td className="table_lista">Estado de la Solicitud</td>
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
}//Fin de Classs AlumnoLiberacion
export default AlumnoLiberacion;