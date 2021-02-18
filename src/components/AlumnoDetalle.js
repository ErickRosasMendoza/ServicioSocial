import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Global from '../Global';
import DirectorioArchivosAlumno from './DirectorioArchivosAlumno';

class AlumnoDetalle extends React.Component{

    url = Global.url;

    state = {
        alumno: {},
        idAlumno: "",
        status: null
        
    };
        componentWillMount() {
            //this.getImage();
            const { match: { params } } = this.props;
            console.log(params.id)
            var id = params.id;
            
            this.setState({
                    idAlumno: id
            })
        }
        componentDidMount(){
            console.log(this.state.idAlumno);
            this.getAlumno();
        }
        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+this.state.idAlumno)
            .then(response => {
               this.setState({
                alumno: response.data,
                status: 'success'
               });
             });
    }
    
    render() {
        return (
            <React.Fragment>
                <DirectorioAdmin />
                    <tbody>
                        <tr >
                            <th className="table_lista">Alumno</th>
                            <th className="table_lista">Boleta</th>
                            <th className="table_lista">Programa Academico</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="table_lista">{this.state.alumno.nombre} {this.state.alumno.apellidoPaterno} {this.state.alumno.apellidoMaterno}</td>
                            <td className="table_lista">{this.state.alumno.boleta}</td> 
                            <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                        </tr>
                    </tbody>
                <DirectorioArchivosAlumno
                idAlumno={this.state.idAlumno}
                />
            </React.Fragment>
        );
       
}//Fin de Render ()
}//Fin de Classs AlumnoDetalle

export default AlumnoDetalle;