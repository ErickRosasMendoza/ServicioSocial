import React, {Component} from 'react';
import Slider from './Slider';
import { Link, Switch } from 'react-router-dom';
import DirectorioAdmin from './DirectorioAdmin';
import Cookies from 'universal-cookie';
import AlumnoDictamen from './AlumnoDictamen';
const cookies = new Cookies();

class DirectorioArchivosAlumno extends Component{

    state = {
        idAlumno: "",
        status: null
    };
    
    componentWillMount() {
        console.log(this.props.idAlumno + "<--- idAlumno props en DAA")
        this.setState({
            idAlumno: this.props.idAlumno
        });
    }

    render(){
            return(
                <div className="center">
                <tbody>
                    <tr>
                        <td className="table active">Docuementacion Dictamen de 70%</td>
                        <td><Link to={'/AlumnoDictamen/' + this.state.idAlumno} id="btn_watch">Lista de Archivos</Link></td>
                        </tr><tr>
                        <td className="table active">Docuementacion Liberacion Extemporanea</td>
                        <td><Link to={'/AlumnoLiberacion/' + this.state.idAlumno} id="btn_watch">Lista de Archivos</Link></td>
                        </tr><tr>
                        <td className="table active">Documentacion Baja de Servicio Social</td>
                        <td><Link to={'/AlumnoBaja/' + this.state.idAlumno} id="btn_watch">Lista de Archivos</Link></td>
                        </tr><tr> 
                        <td className="table active">Docuementacion Servicio Social</td>
                        <td><Link to={'/AlumnoServicio/' + this.state.idAlumno} id="btn_watch">Lista de Archivos</Link></td>
                    </tr>
                </tbody>
                </div>
            )//Fin de Return
    };

}//Fin de Class DirectorioArchivosAlumno
export default DirectorioArchivosAlumno;