import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Global from '../Global';

class AlumnoBaja extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        tipoBaja: {},
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
            this.getTipoBaja();
            this.getLista();
            this.getAlumno();
        }
        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+ this.state.idAlumno)
            .then(response => {
            this.setState({
                alumno: response.data,
            });
            } );   
        }//Fin de getAlumno()
    
    getTipoBaja = () => {
        axios.get(this.url +"solicitudBaja/findIdAlumno/"+ this.state.idAlumno)
        .then(response => {
        this.setState({
            tipoBaja: response.data,
            status: 'success'
        });
        } );   
    }//Fin de getTipoBaja()

    getLista = () => {
        axios.get(this.url+"/lista/findBaja/" + this.state.idAlumno)
            .then(response => {
                this.setState({
                    listar: response.data,
                });
            });
    }//Fin de getLista
    
    render(){
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
                            <strong>Registro de Servicio Social:</strong> {this.state.tipoBaja.registroSS}
                        </div>
                        <div className="text_login">
                            <strong>Programa de ServicioSocial:</strong> {this.state.tipoBaja.programaSS}
                        </div>
                        <div className="text_login">
                            <strong>Prestatario:</strong> {this.state.tipoBaja.prestatario}
                        </div>
                        <div className="text_login">
                            <strong>Fecha de Inicio:</strong> {this.state.tipoBaja.fechaInicio}
                        </div>
                        <div className="text_login">
                            <strong>Fecha de Término:</strong> {this.state.tipoBaja.fechaTermino}
                        </div>
                        <div className="text_login">
                            <strong>Tipo de Baja:</strong> {this.state.tipoBaja.tipoBaja}
                        </div>
                        <div className="text_login">
                            <strong>Egresado:</strong> No, No soy EGRESADO
                        </div>
                        <div className="text_login">
                            <strong>Semestre:</strong> {this.state.tipoBaja.semestre}
                        </div>
                    </div>
                    <div id="sidebar" className="tipoBajaAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfBaja/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocBaja/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                    <td><button id="btn_delete"  onClick = "">Eliminar</button></td>
                                </tr>
                            </tbody>
                        )}
                    </div>
                </div>
            );
}//Fin de Render ()
}//Fin de Classs AlumnoBaja
export default AlumnoBaja;