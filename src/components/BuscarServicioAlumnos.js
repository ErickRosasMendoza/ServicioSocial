import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
class BuscarServicioAlumnos extends Component{

    url = Global.url;

    state = {
        alumno: {},
        servicios: [],
        status: null
    };

    componentWillMount() {
        this.getServicios();
    }

    getServicios = () => {
        axios.get(this.url+"servicioSocial/findAll")
            .then(response => {
                this.setState({
                    servicios: response.data,
                    status: 'success'
                });
            });
    }//Fin de getServicios
    
render() {
    if(this.state.servicios.length >=1){        
       return (
        <React.Fragment>
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Responsable Directo</th>
                        <th className="table_lista">Estado de la Solicitud</th>
                    </tr>
                </tbody>
                {this.state.servicios.map((servicio, i) =>
                    <tbody key={i}>
                    <tr>
                        <td className="table_lista">{servicio.semestre}</td>
                        <td className="table_lista">{servicio.responsableDirecto}</td>
                        <td className="table_lista">{(() => {  
                                switch (servicio.estado){
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
                        <td><Link to={'/DirectorioArchivosAlumno/' + servicio.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                    </tr>
                </tbody>
                )
                }
        </React.Fragment>
    );
    }else if(this.state.servicios.length == 0 && this.state.status == 'success'){
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
                <h1>Cargando... Espere un momento...</h1>
            </div>
        );
    }
    }//Fin de Render
}//Fin de Class BuscarServicioAlumnos
export default BuscarServicioAlumnos;