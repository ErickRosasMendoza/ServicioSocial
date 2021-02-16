import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Global from '../Global';

class AlumnoLiberacion extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        liberacion: {},
        alumno: {},
        status: null
    };
        componentWillMount() {
            const { match: { params } } = this.props;
            console.log(params.id)
            var id = params.id;
            this.setState({
                    idAlumno: id
            })
        }
        componentDidMount(){
            console.log(this.state.idAlumno);
            this.getliberacion();
            this.getLista();
            this.getAlumno();
        }
        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+ this.state.idAlumno)
            .then(response => {
            this.setState({
                alumno: response.data,
                status: 'success'
            });
            } );   
        }//Fin de getAlumno()
    
    getliberacion = () => {
        axios.get(this.url +"liberacionExtemporanea/findIdAlumno/"+ this.state.idAlumno)
        .then(response => {
        this.setState({
            liberacion: response.data,
        });
        } );   
    }//Fin de getLiberacion()

    getLista = () => {
        axios.get(this.url+"/lista/findLiberacion/" + this.state.idAlumno)
            .then(response => {
                this.setState({
                    listar: response.data,
                });
            });
    }//Fin de getLista
    
    render(){
        if(this.state.liberacion.idAlumno && this.state.liberacion.idAlumno != null && this.state.liberacion.idAlumno != undefined){
            return(
                <div className="center">
                <DirectorioAdmin />
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
                            <strong>Registro de Servicio Social:</strong> {this.state.liberacion.registroSS}
                        </div>
                        <div className="text_login">
                            <strong>Programa de ServicioSocial:</strong> {this.state.liberacion.programaSS}
                        </div>
                        <div className="text_login">
                            <strong>Prestatario:</strong> {this.state.liberacion.prestatario}
                        </div>
                        <div className="text_login">
                            Número Telefónico: {this.state.liberacion.telefono}
                        </div>
                        <div className="text_login">
                            <strong>Fecha de Inicio:</strong> {this.state.liberacion.fechaInicio}
                        </div>
                        <div className="text_login">
                            <strong>Fecha de Término:</strong> {this.state.liberacion.fechaTermino}
                        </div>
                        <div className="text_login">
                            <strong>Egresado:</strong> No, No soy EGRESADO
                        </div>
                        <div className="text_login">
                            <strong>Semestre:</strong> {this.state.liberacion.semestre}
                        </div>
                    </div>
                    <div id="sidebar" className="liberacionAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfLiberacion/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocLiberacion/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
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
                        <div id="sidebar" className="dictamenCenter">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación de DICTAMEN DE MENOS DE 70% DE CREDITOS.
                            </div>
                        </div>          
                        <div id="sidebar" className="dictamenRicht">
                            <div className="text_login">
                                No tienes datos disponibles, registralos para empezar con tu documentación de DICTAMEN DE MENOS DE 70% DE CREDITOS.
                            </div>
                        </div>          
            </div>
            );
        }
}//Fin de Render ()
}//Fin de Classs AlumnoLiberacion
export default AlumnoLiberacion;