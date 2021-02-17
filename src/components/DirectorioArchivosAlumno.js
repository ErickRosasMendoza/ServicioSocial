import React, {Component} from 'react';
import Slider from './Slider';
import { Link, Switch } from 'react-router-dom';
import DirectorioAdmin from './DirectorioAdmin';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class DirectorioArchivosAlumno extends Component{

    state = {
        idAlumno: "",
        status: null
    };

    componentWillMount() {
        const { match: { params } } = this.props;
        console.log(params.id)
        var id = params.id;
        this.setState({
                idAlumno: id
        })
    }

    render(){
            return(
                <div className="center">
                <DirectorioAdmin />
                <tbody>
                    <tr>
                        <td className="table_lista"> <Link to={'/AlumnoDictamen/' + this.state.idAlumno} className="active">Docuementacion Dictamen de 70%</Link></td>
                        <td className="table_lista"> <Link to={'/AlumnoLiberacion/' + this.state.idAlumno} className="active">Docuementacion Liberacion Extemporanea</Link></td>
                        <td className="table_lista"> <Link to={'/AlumnoBaja/' + this.state.idAlumno} className="active">Documentacion Baja de Servicio Social</Link></td> 
                        <td className="table_lista"> <Link to={'/AlumnoServicio/' +this.state.idAlumno} className="active">Docuementacion Servicio Social</Link></td>
                    </tr>
                </tbody>
                </div>
            )//Fin de Return
    };

}//Fin de Class DirectorioArchivosAlumno
export default DirectorioArchivosAlumno;