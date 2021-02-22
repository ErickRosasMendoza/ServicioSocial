import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
class BuscarLiberacionAlumnos extends Component{

    url = Global.url;

    state = {
        alumno: {},
        liberaciones: [],
        status: null
    };

    componentWillMount() {
        this.getLiberaciones();
    }

    getLiberaciones = () => {
        axios.get(this.url+"liberacionExtemporanea/findAll")
            .then(response => {
                this.setState({
                    liberaciones: response.data,
                    status: 'success'
                });
            });
    }//Fin de getLiberaciones
    
render() {
    if(this.state.liberaciones.length >=1){        
       return (
        <React.Fragment>
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Registro de Servicio Social</th>
                        <th className="table_lista">Estado de la Solicitud</th>
                    </tr>
                </tbody>
                {this.state.liberaciones.map((liberacion, i) =>
                    <tbody key={i}>
                    <tr>
                        <td className="table_lista">{liberacion.semestre}</td>
                        <td className="table_lista">{liberacion.registroSS}</td>
                        <td className="table_lista">{(() => {  
                                switch (liberacion.estado){
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
                        <td><Link to={'/DirectorioArchivosAlumno/' + liberacion.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                    </tr>
                </tbody>
                )
                }
        </React.Fragment>
    );
    }else if(this.state.liberaciones.length == 0 && this.state.status == 'success'){
        return(
            <div className="center">
            <DirectorioAdmin />
                <h1>No hay alumnos registrados para esta solicitud</h1>
            </div>
        );
    }else{
        return(
            <div className="center">
            <DirectorioAdmin />
                <h1>Cargando... espere un momento</h1>
            </div>
        );
    }
    }//Fin de Render
}//Fin de Class BuscarLiberacionAlumnos
export default BuscarLiberacionAlumnos;