import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Global from '../Global';

class AlumnoDictamen extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        dictamen: {},
        alumno: {},
        statusDictamen: null,
        statusLista: null
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
            this.getDictamen();
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
    
    getDictamen = () => {
        axios.get(this.url +"dictamen/findIdAlumno/"+ this.state.idAlumno)
        .then(response => {
        this.setState({
            dictamen: response.data,
            statusDictamen: 'success'
        });
        } );   
    }//Fin de getDictamen()

    getLista = () => {
        axios.get(this.url+"/lista/findDictamen/" + this.state.idAlumno)
            .then(response => {
                this.setState({
                    listar: response.data,
                    statusLista: 'success'
                });
            });
    }//Fin de getLista
    
    render(){
        if(this.state.statusDictamen == 'success' && this.state.statusLista == 'success'){
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
                            <strong>Procentaje de creditos:</strong> {this.state.dictamen.porcentajeCreditos}%
                        </div>
                        <div className="text_login">
                            <strong>Semestre:</strong> {this.state.dictamen.semestre}
                        </div>
                    </div>
                    <div id="sidebar" className="dictamenAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                    <td><button id="btn_delete"  onClick = "">Eliminar</button></td>
                                </tr>
                            </tbody>
                        )}
                    </div>
                </div>
            );
        }else if(this.state.statusDictamen == 'success' && this.state.statusLista != 'success'){
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
                            <strong>Procentaje de creditos:</strong> {this.state.dictamen.porcentajeCreditos}%
                        </div>
                        <div className="text_login">
                            <strong>Semestre:</strong> {this.state.dictamen.semestre}
                        </div>
                    </div>
                    <div id="sidebar" className="dictamenAdminRight">
                        No hay archivos guardados
                    </div>
                </div>
            );
        }else if(this.state.statusDictamen != 'success' && this.state.statusLista == 'success'){
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
                        Aun no hay datos registrados para esta documentación
                    </div>
                    <div id="sidebar" className="dictamenAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
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
                        Aun no hay datos registrados para esta documentación
                    </div>
                    <div id="sidebar" className="dictamenAdminRight">
                    No hay archivos guardados
                </div>
            </div>
        );
        }
}//Fin de Render ()
}//Fin de Classs AlumnoDictamen
export default AlumnoDictamen;