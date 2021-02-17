import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';

class BuscarAlumno extends React.Component {

    url = Global.url;

    nombreRef = React.createRef();

    state = {
        alumnos: [],
        nombre: "",
        status: null
    };

    changeState = () => {
        this.setState({
                nombre: this.nombreRef.current.value
        });
    }

    searchAlumno = (e) => {
        this.changeState();
        axios.get(this.url + "alumno/findNombre/" + this.state.nombre)
            .then(res => {
                this.setState(
                    {
                        alumnos:res.data     
                    }
                );
            });
    }//Fin de searchAlumno

    render() {
        return (
            <div className="center">
                <DirectorioAdmin />
                        <div className="form-group" >
                            <label htmlFor="nombre" className="text_login">Buscar por Nombre</label>
                            <input type="text"  className="input_login" name="nombre" ref={this.nombreRef} onChange={this.changeState} />
                        </div>
                       <button  onClick = {this.searchAlumno}>BUSCAR</button>
                                <tbody >
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
                            )}
            </div>
        );
    }//Fin de Render
    
}//Fin de Buscar Alumno
export default BuscarAlumno;