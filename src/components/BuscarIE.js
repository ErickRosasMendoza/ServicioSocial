import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import Slider from './Slider';
import DirectorioAdmin from './DirectorioAdmin';

class BuscarIE extends React.Component {

    url = Global.url;

    state = {
        programas: [],
        status: null
    };

    componentWillMount = () => {
        this.searchIE();
    }

    searchIE = () => {
         axios.get(this.url + "alumno/findPrograma/INGENIERÍA ELÉCTRICA")
            .then(res => {
                this.setState(
                    {
                        programas:res.data,
                        status: "true"     
                    }
                );
            });
    }//Fin de searchIE

    render() {
        if(this.state.programas.length >=1){
            return (
                <div className="center">
                    <DirectorioAdmin />
                                    <tbody >
                                        <tr >
                                            <th className="table_lista">Alumno</th>
                                            <th className="table_lista">Boleta</th>
                                            <th className="table_lista">Programa Academico</th>
                                        </tr>
                                    </tbody>
                                {this.state.programas.map((programa1, i) =>
                                    <tbody key={i}>
                                        <tr>
                                            <td className="table_lista">{programa1.nombre} {programa1.apellidoPaterno} {programa1.apellidoMaterno}</td>
                                            <td className="table_lista">{programa1.boleta}</td>
                                            <td className="table_lista">{programa1.programaAcademico}</td>
                                            <td><Link to={'/DirectorioArchivosAlumno/' + programa1.idAlumno} id="btn_watch">Ver Archivos</Link></td>
                                        </tr>
                                    </tbody>
                                )}
                </div>
            );
        }else if(this.state.programas.length === 0 && this.state.status === 'true'){
            return (
                <div className="center">
                    <DirectorioAdmin />
                                    <tbody >
                                        <tr >
                                            <th className="table_lista">Alumno</th>
                                            <th className="table_lista">Boleta</th>
                                            <th className="table_lista">Programa Academico</th>
                                        </tr>
                                    </tbody>
                                <div>
                                    <h1>Aun no existen alumnos registrados de este Programa Academico</h1>
                            </div>
                </div>
            );
        }else{
            return(
                <div className="center">
                    <DirectorioAdmin />
                                    <tbody >
                                        <tr >
                                            <th className="table_lista">Alumno</th>
                                            <th className="table_lista">Boleta</th>
                                            <th className="table_lista">Programa Academico</th>
                                        </tr>
                                    </tbody>
                                    <div>
                                    <h1>Cargando... Espere un momento</h1>
                                </div>
                </div>
            );
        }
    }//Fin de Render
    
}//Fin de BuscarIE
export default BuscarIE;