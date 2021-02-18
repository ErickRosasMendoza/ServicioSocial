import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import DirectorioArchivosAlumno from './DirectorioArchivosAlumno';
import Slider from './Slider';
import BorrarDoc from './BorrarDoc';
import Global from '../Global';

class AlumnoBaja extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        tipoBaja: {},
        alumno: {},
        statusTipoBaja: null,
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
            statusTipoBaja: 'success'
        });
        } );   
    }//Fin de getTipoBaja()

    getLista = () => {
        axios.get(this.url+"/lista/findBaja/" + this.state.idAlumno)
            .then(response => {
                this.setState({
                    listar: response.data,
                    statusLista: 'success'
                });
            });
    }//Fin de getLista
    
    render(){
        if(this.state.listar.length >=1 && this.state.statusTipoBaja == 'success' && this.state.statusLista == 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.tipoBaja.semestre}</td>
                        <td className="table_lista">{this.state.tipoBaja.registroSS}</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="dictamenAdminCenter">
                    {this.state.listar.map((lista1, i) =>
                        <tbody key={i}>
                            <tr>
                                <td>{lista1.nombreDoc}</td>
                                <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                <td><BorrarDoc
                                    idLista={lista1.idLista}
                                    idDoc={lista1.idDoc}
                                    url= "docBaja/deleteDoc/"
                                    redirect={lista1.idAlumno}
                                    /></td>
                            </tr>
                        </tbody>
                    )}
                </div>
            </div>
        );
    }else if(this.state.listar.length == 0 && this.state.statusTipoBaja == 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.tipoBaja.semestre}</td>
                        <td className="table_lista">{this.state.tipoBaja.registroSS}</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="dictamenAdminCenter">
                        Este alumno aun no tiene archivos registrados
                    </div>
            </div>
        );
    }else if(this.state.listar.length != 0 && this.state.statusTipoBaja != 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">SIN REGISTRO</td>
                        <td className="table_lista">SIN REGISTRO</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="dictamenAdminCenter">
                    {this.state.listar.map((lista1, i) =>
                        <tbody key={i}>
                            <tr>
                                <td>{lista1.nombreDoc}</td>
                                <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                <td><BorrarDoc
                                    idLista={lista1.idLista}
                                    idDoc={lista1.idDoc}
                                    url= "docBaja/deleteDoc/"
                                    redirect={lista1.idAlumno}
                                    /></td>
                            </tr>
                        </tbody>
                    )}
                </div>
            </div>
        );
    }else if(this.state.listar.length == 0 && this.state.statusTipoBaja != 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">SIN REGISTRO</td>
                        <td className="table_lista">SIN REGISTRO</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="dictamenAdminCenter">
                    Este alumno aun no tiene archivos registrados
                </div>
            </div>
        );
    }else{
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">Cargando...</td>
                        <td className="table_lista">Cargando...</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="dictamenAdminCenter">
                    Cargando... Espere un momento...
                </div>
            </div>
        );
    }
}//Fin de Render ()
}//Fin de Classs AlumnoBaja
export default AlumnoBaja;