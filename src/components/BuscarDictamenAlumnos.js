import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
class BuscarDictamenAlumnos extends Component{

    url = Global.url;

    state = {
        alumno: {},
        dictamenes: [],
        status: null
    };

    componentWillMount() {
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
    }//Fin de getDictamenes
    
render() {
    if(this.state.dictamenes.length >=0){        
       return (
        <React.Fragment>
            <DirectorioAdmin />
                <tbody>
                    <tr >
                        <th className="table_lista">Semestre</th>
                        <th className="table_lista">Porcentaje de Creditos</th>
                    </tr>
                </tbody>
                {this.state.dictamenes.map((dictamen, i) =>
                    <tbody key={i}>
                    <tr>
                        <td className="table_lista">{dictamen.semestre}</td>
                        <td className="table_lista">{dictamen.porcentajeCreditos}</td>
                        <td><Link to={'/DirectorioArchivosAlumno/' + dictamen.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                    </tr>
                </tbody>
                )
                }
        </React.Fragment>
    );
    }else if(this.state.dictamenes.length == 0 && this.state.status == 'success'){
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
}//Fin de Class BuscarDictamenAlumnos
export default BuscarDictamenAlumnos;