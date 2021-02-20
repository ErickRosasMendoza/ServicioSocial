import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
class BuscarBajaAlumnos extends Component{

    url = Global.url;

    state = {
        alumno: {},
        bajas: [],
        status: null
    };

    componentWillMount() {
        this.getBajas();
    }

    getBajas = () => {
        axios.get(this.url+"solicitudBaja/findAll")
            .then(response => {
                this.setState({
                    bajas: response.data,
                    status: 'success'
                });
            });
    }//Fin de getBajas
    
render() {
    if(this.state.bajas.length >=0){        
       return (
        <React.Fragment>
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                    </tr>
                </tbody>
                {this.state.bajas.map((baja, i) =>
                    <tbody key={i}>
                    <tr>
                        <td className="table_lista">{baja.semestre}</td>
                        <td className="table_lista">{baja.registroSS}</td>
                        <td><Link to={'/DirectorioArchivosAlumno/' + baja.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                    </tr>
                </tbody>
                )
                }
        </React.Fragment>
    );
    }else if(this.state.bajas.length === 0 && this.state.status === 'success'){
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
}//Fin de Class BuscarBajaAlumnos
export default BuscarBajaAlumnos;