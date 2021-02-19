import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
class BuscarDictamenAlumnos extends Component{

    url = Global.url;
    state = {
        alumnos: [],
        dictamenes: [],
        status: null
    };

    componentWillMount() {
        this.getAlumnos();
        this.getDictamenes();
    }

    getDictamenes = () => {
        axios.get(this.url+"dictamen/findAll")
            .then(response => {
                this.setState({
                    dictamenes: response.data,
                    status: 'success'
                });
            });
    }

    getAlumnos = () => {
        axios.get(this.url+"dictamen/findAll")
            .then(response => {
                this.setState({
                    alumnos: response.data,
                    status: 'success'
                });
            });
    }
    
render() {
    if(this.state.alumnos.length >=0){        
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
                {this.state.alumnos.map((alumno, i) =>
                    <tbody key={i}>
                    <tr>
                        <td className="table_lista">{alumno.nombre} {alumno.apellidoPaterno} {alumno.apellidoMaterno}</td>
                        <td className="table_lista">{alumno.boleta}</td> 
                        <td className="table_lista">{alumno.programaAcademico}</td>
                        <td><Link to={'/DirectorioArchivosAlumno/' + alumno.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                    </tr>
                </tbody>
                )
                }
        </React.Fragment>
    );
    }else if(this.state.alumnos.length === 0 && this.state.status === 'success'){
        return(
            <div>
                <h1>No hay alumnos registrados para esta solicitud</h1>
            </div>
        );
    }else{
        return(
            <div>
                <h1>Cargando... Espere un momento...</h1>
            </div>
        );
    }
    }//Fin de Render
}//Fin de Class BuscarDictamen
export default BuscarDictamenAlumnos;