import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Global from '../Global';
import DirectorioArchivosAlumno from './DirectorioArchivosAlumno';
import BorrarDoc from './BorrarDoc';

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
            console.log(this.state.alumno.idAlumno + "<--- idAlumno despues de getalumno en AD")
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
        if(this.state.listar.length >=1 && this.state.statusDictamen == 'success' && this.state.statusLista == 'success'){
            return(
                <div className="center">
                <DirectorioAdmin />
                    <tbody>
                        <tr >
                            <th className="table_lista">Alumno</th>
                            <th className="table_lista">Boleta</th>
                            <th className="table_lista">Programa Academico</th>
                            <th className="table_lista">Semestre</th>
                            <th className="table_lista">Prorcentaje Creditos</th>  
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                            <td className="table_lista">{this.state.alumno.boleta}</td> 
                            <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                            <td className="table_lista">{this.state.dictamen.semestre}</td>
                            <td className="table_lista">{this.state.dictamen.porcentajeCreditos}</td>
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
                                        url= "docDictamen/deleteDoc/"
                                        redirect={lista1.idAlumno}
                                    /></td>
                                </tr>
                            </tbody>
                        )}
                    </div>
                </div>
            );
        }else if(this.state.listar.length == 0 && this.state.statusDictamen == 'success'){
            return(
                <div className="center">
                <DirectorioAdmin />
                    <tbody>
                        <tr >
                            <th className="table_lista">Alumno</th>
                            <th className="table_lista">Boleta</th>
                            <th className="table_lista">Programa Academico</th>
                            <th className="table_lista">Semestre</th>
                            <th className="table_lista">Prorcentaje Creditos</th>  
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                            <td className="table_lista">{this.state.alumno.boleta}</td> 
                            <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                            <td className="table_lista">{this.state.dictamen.semestre}</td>
                            <td className="table_lista">{this.state.dictamen.porcentajeCreditos}</td>
                        </tr>
                    </tbody>
                    <div id="sidebar" className="dictamenAdminCenter">
                        Este alumno aun no tiene archivos registrados
                    </div>
                </div>
            );
        }else if(this.state.listar.length != 0 && this.state.statusDictamen != 'success'){
            return(
                <div className="center">
                <DirectorioAdmin />
                    <tbody>
                        <tr >
                            <th className="table_lista">Alumno</th>
                            <th className="table_lista">Boleta</th>
                            <th className="table_lista">Programa Academico</th>
                            <th className="table_lista">Semestre</th>
                            <th className="table_lista">Prorcentaje Creditos</th>  
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
                                        url= "docDictamen/deleteDoc/"
                                        redirect={lista1.idAlumno}
                                    /></td>
                                </tr>
                            </tbody>
                        )}
                    </div>
                </div>
            );
        }else if(this.state.listar.length == 0 && this.state.statusDictamen != 'success'){
            return(
                <div className="center">
                <DirectorioAdmin />
                    <tbody>
                        <tr >
                            <th className="table_lista">Alumno</th>
                            <th className="table_lista">Boleta</th>
                            <th className="table_lista">Programa Academico</th>
                            <th className="table_lista">Semestre</th>
                            <th className="table_lista">Prorcentaje Creditos</th>  
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
                    <br/>
                    <DirectorioArchivosAlumno
                    idAlumno={this.state.idAlumno}
                    />
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
                            <th className="table_lista">Prorcentaje Creditos</th>  
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
                    <br/>
                    <DirectorioArchivosAlumno
                    idAlumno={this.state.idAlumno}
                    />
                    <div id="sidebar" className="dictamenAdminCenter">
                        Cargando... Espere un momento...
                    </div>
                </div>
            );
        }
}//Fin de Render ()
}//Fin de Classs AlumnoDictamen
export default AlumnoDictamen;