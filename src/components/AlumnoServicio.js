import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import DirectorioArchivosAlumno from './DirectorioArchivosAlumno';
import BorrarDoc from './BorrarDoc';
import Slider from './Slider';
import Global from '../Global';

class AlumnoServicio extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        servicio: {},
        alumno: {},
        statusServicio: null,
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
            this.getServicio();
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
    
    getServicio = () => {
        axios.get(this.url +"servicioSocial/findIdAlumno/"+ this.state.idAlumno)
        .then(response => {
        this.setState({
            servicio: response.data,
            statusServicio: 'success'
        });
        } );   
    }//Fin de getservicio()

    getLista = () => {
        axios.get(this.url+"/lista/findServicio/" + this.state.idAlumno)
            .then(response => {
                this.setState({
                    listar: response.data,
                    statusLista: 'success'
                });
            });
    }//Fin de getLista
    
    render(){
        if(this.state.listar.length >=1 && this.state.statusServicio == 'success' && this.state.statusLista == 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>  
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.servicio.semestre}</td>
                        <td className="table_lista">{this.state.servicio.responsableDirecto}</td>
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
                                    url= "docServicio/deleteDoc/"
                                    redirect={lista1.idAlumno}
                                    /></td>
                            </tr>
                        </tbody>
                    )}
                </div>
            </div>
        );
    }else if(this.state.listar.length == 0 && this.state.statusServicio == 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>  
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.servicio.semestre}</td>
                        <td className="table_lista">{this.state.servicio.responsableDirecto}</td>
                    </tr>
                </tbody>
                <div id="sidebar" className="dictamenAdminCenter">
                        Este alumno aun no tiene archivos registrados
                    </div>
            </div>
        );
    }else if(this.state.listar.length != 0 && this.state.statusServicio != 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>  
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
                                    url= "docServicio/deleteDoc/"
                                    redirect={lista1.idAlumno}
                                    /></td>
                            </tr>
                        </tbody>
                    )}
                </div>
            </div>
        );
    }else if(this.state.listar.length == 0 && this.state.statusServicio != 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>  
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
                        <th className="table_lista">Responsable Directo</th>  
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
}//Fin de Classs AlumnoServicio
export default AlumnoServicio;