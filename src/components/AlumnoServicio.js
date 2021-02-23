import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class AlumnoServicio extends React.Component{

    url = Global.url;

    state = {
        idAlumno: this.props.id,
        servicio: {},
        alumno: {},
        statusServicio: null,
    };
     componentWillMount=()=> {
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
            statusServicio: 'success'
        });
        } );   
    }//Fin de getservicio()
    
    render(){
<<<<<<< HEAD
        
        if(this.state.listar.length >=1 && this.state.statusServicio == 'success' && this.state.statusLista == 'success'){
=======
        if(this.state.statusServicio == 'success'){
>>>>>>> 606a5068649145934465a3dc93964b724d453062
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>  
                        <th className="table_lista">Estado de la Solicitud</th>  
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno} {this.state.alumno.nombre}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        <td className="table_lista">{this.state.servicio.semestre}</td>
                        <td className="table_lista">{this.state.servicio.responsableDirecto}</td>
                        <td className="table_lista">{(() => {  
                                switch (this.state.servicio.estado){
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
            </div>
        );
    }else if(this.state.statusServicio != 'success'){
        return(
            <div className="center">
                <tbody>
                    <tr >
                        <th className="table_lista">Alumno</th>
                        <th className="table_lista">Boleta</th>
                        <th className="table_lista">Programa Academico</th>
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>
                        <th className="table_lista">Estado de la Solicitud</th>  
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table_lista">{this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno} {this.state.alumno.nombre}</td>
                        <td className="table_lista">{this.state.alumno.boleta}</td> 
                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
<<<<<<< HEAD
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
=======
>>>>>>> 606a5068649145934465a3dc93964b724d453062
                        <td className="table_lista">SIN REGISTRO</td>
                        <td className="table_lista">SIN REGISTRO</td>
                        <td className="table_lista">SIN REGISTRO</td>
                    </tr>
                </tbody>
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
                        <th className="table_lista">Responsable Directo</th>
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
            </div>
        );
    }
}//Fin de Render ()
}//Fin de Classs AlumnoServicio
export default AlumnoServicio;