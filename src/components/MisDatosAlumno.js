import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import axios from 'axios';
import Global from '../Global';
import DirectorioAlumno from './DirectorioAlumno';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class MisDatosAlumno extends React.Component{

    url = Global.url;

    state = {
        alumno: {},
        usuario: {},
        idUsuario: cookies.get('idUsuario'),
        idAlumno: cookies.get('idAlumno'),
        email: cookies.get('email'),
        status: null
    };
        componentWillMount() {
            this.getAlumno();
        }

        getAlumno = () => {
            axios.get(this.url +"alumno/findIdUsuario/"+ this.state.idUsuario)
            .catch(error=>{
                    alert("REGISTRA TUS DATOS PERSONALES")
                    window.location.href = '/DatosAlumno';
            })
            .then(res => {
                    this.setState({
                        alumno: res.data,
                        status: 'success'
                       });
                       cookies.set('idAlumno', this.state.alumno.idAlumno, {path:"/"})
            })
        }//Fin de funcion getAlumno()
        
    render() {
            return(
                <div className="center">
                    <DirectorioAlumno />
                    <br/>
                    <tbody >
                        <tr >
                            <th className="table_lista">Nombre</th>
                            <th className="table_lista">Apellido Paterno</th>
                            <th className="table_lista">Apellido Materno</th>
                            <th className="table_lista">Boleta</th>
                            <th className="table_lista">Programa Academico</th>
                            <th className="table_lista">Correo</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="table_lista">{this.state.alumno.nombre}</td>
                            <td className="table_lista">{this.state.alumno.apellidoPaterno}</td>
                            <td className="table_lista">{this.state.alumno.apellidoMaterno}</td>
                            <td className="table_lista">{this.state.alumno.boleta}</td>
                            <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                            <td className="table_lista">{this.state.email}</td>
                        </tr>
                        </tbody>
                </div>
            );
  
}//Fin de Render ()
}//Fin de Classs MisDatosAlumno

export default MisDatosAlumno;