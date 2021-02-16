import React from 'react';
import axios from 'axios';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
import { Link } from 'react-router-dom';

class BuscarBoleta extends React.Component {

    url = Global.url;

    boletaRef = React.createRef();

    state = {
        alumno: {},
        boleta:"",
        status: null
    };

    changeState = () => {
        this.setState({
            boleta: this.boletaRef.current.value
        });
        console.log(this.state);
    }

    searchBoleta = (e) => {
        this.changeState();
        axios.get(this.url + "alumno/findBoleta/" + this.state.boleta)
        .then(res => {
            this.setState(
                {
                    alumno:res.data     
                }
            );
        });
    }//Fin de search

    render() {
        return (
            <div className="center">
                <DirectorioAdmin />
                        <div className="form-group" >
                            <label htmlFor="nombre" className="text_login">Buscar por Boleta</label>
                            <input type="text"  className="input_login" name="nombre" ref={this.boletaRef} onChange={this.changeState} />
                        </div>
                       <button  onClick = {this.searchBoleta}>BUSCAR</button>
                                <tbody >
                                    <tr >
                                        <th className="table_lista">Nombre</th>
                                        <th className="table_lista">Apellido Paterno</th>
                                        <th className="table_lista">Apellido Materno</th>
                                        <th className="table_lista">Boleta</th>
                                        <th className="table_lista">Programa Academico</th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="table_lista">{this.state.alumno.nombre}</td>
                                        <td className="table_lista">{this.state.alumno.apellidoPaterno}</td>
                                        <td className="table_lista">{this.state.alumno.apellidoMaterno}</td>
                                        <td className="table_lista">{this.state.alumno.boleta}</td>
                                        <td className="table_lista">{this.state.alumno.programaAcademico}</td>
                                        <td><Link to={'/DirectorioArchivosAlumno/' + this.state.alumno.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                                    </tr>
                                </tbody>
            </div>
        );
    }//Fin de Render
}//Fin de Buscar Boleta
export default BuscarBoleta;