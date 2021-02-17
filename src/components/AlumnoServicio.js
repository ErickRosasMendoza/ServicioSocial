import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Global from '../Global';

class AlumnoServicio extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        servicio: {},
        alumno: {},
        status: null
    };
     componentWillMount=()=> {
            this.getLista();
            this.getServicio();
            this.getAlumno();            
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
    
    getServicio = () => {
        axios.get(this.url +"servicioSocial/findIdAlumno/"+ this.props.id)
        .then(response => {
        this.setState({
            servicio: response.data,
            status: 'success'
        });
        } );   
    }//Fin de getservicio()

    getLista = () => {
        axios.get(this.url+"/lista/findServicio/" + this.props.id)
            .then(response => {
                this.setState({
                    listar: response.data,
                });
            });
    }//Fin de getLista
    
    render(){
        if(this.state.servicio.idAlumno && this.state.servicio.idAlumno != null && this.state.servicio.idAlumno != undefined){
            return(
                <div className="center">
                
                    <div id="sidebar" className="infoAdminLeft">
                    <div className="text_login">
                        <strong>Nombre:</strong> {this.state.alumno.nombre}
                        </div>
                        <div className="text_login">
                            <strong>Apellido Paterno:</strong> {this.state.alumno.apellidoPaterno}
                        </div>
                        <div className="text_login">
                            <strong>Apellido Materno:</strong> {this.state.alumno.apellidoMaterno} 
                        </div>
                        <div className="text_login">
                            <strong>Boleta:</strong> {this.state.alumno.boleta}
                        </div>
                        <div className="text_login">
                            <strong>Programa Academico:</strong> {this.state.alumno.programaAcademico} 
                        </div>
                    </div>
                    <div id="sidebar" className="infoAdminCenter">
                    <div className="text_login">
                            <strong>Responsable Directo:</strong> {this.state.servicio.responsableDirecto}
                        </div>
                        <div className="text_login">
                            <strong>Semestre:</strong> {this.state.servicio.semestre}
                        </div>
                    </div>
                    <div id="sidebar" className="servicioAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfServicio/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocServicio/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                    <td><button id="btn_delete"  onClick = "">Eliminar</button></td>
                                </tr>
                            </tbody>
                        )}
                    </div>
                </div>
            );
        }else{
            return(
                <div className="center">
                        <div id="sidebar" className="servicioCenter">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación de servicio DE MENOS DE 70% DE CREDITOS.
                            </div>
                        </div>          
                        <div id="sidebar" className="servicioRicht">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación de servicio DE MENOS DE 70% DE CREDITOS.
                            </div>
                        </div>          
            </div>
            );
        }
}//Fin de Render ()
}//Fin de Classs AlumnoServicio
export default AlumnoServicio;