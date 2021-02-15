import React, {Component} from 'react';
import Slider from './Slider';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class DirectorioAdmin extends Component{



    state = {
        email: cookies.get('email'),
    }

	cerrarSesion(){
        cookies.remove('idUsuario', {path:"/"});
        cookies.remove('email', {path:"/"});
        cookies.remove('contraseña', {path:"/"});
        cookies.remove('tipoUsuario', {path:"/"});
        window.location.href = '/IniciarSesion';
    }

	componentWillMount = () => {
        if(cookies.get('email') == null){
            window.location.href = './IniciarSesion';
        }
    }//Fin de funcion WillMount

    componentDidMount = () => {
        if(cookies.get('email') == null){
            window.location.href = './IniciarSesion';
        } 
    }//Fin de funcion DidMount

    render(){
        return(
            <div className="center">
                    <tbody >
                        <tr >
                            <th className="table"><Link to='/Buscar' className = "active">Buscar Alumno</Link></th>
                            <th className="table"><Link to='/Lista' className = "active">Lista de Alumnos</Link></th>
                            <th className="table"><div>
                                <ul>
                                    <li>
                                        <Link to='#' id="linea">Buscar Programa Academico</Link>
                                        <ul>
                                            <li><Link to={'/BuscarICA'} id="linea">INGENIERÍA EN CONTROL Y AUTOMATIZACIÓN</Link></li>
                                            <li><Link to={'/BuscarICE'} id="linea">INGENIERÍA EN COMUNICACIONES Y ELECTRÓNICA</Link></li>
                                            <li><Link to={'/BuscarIE'} id="linea">INGENIERÍA ELÉCTRICA</Link></li>
                                            <li><Link to={'/BuscarISISA'} id="linea">INGENIERÍA EN SISTEMAS AUTOMOTRICES</Link></li>
                                        </ul>
                                        </li>
                                    </ul>
                                </div>
                            </th>
                            <th className="table"><Link to='/Crearadmin' className = "active">Crear Administrador</Link></th>
                            <th className="table"><Link to='/MisDatosAdmin' className = "active">Datos Personales</Link></th>
                            <th className="table"><button onClick={this.cerrarSesion}>cerrar sesion</button></th>
                        </tr>
                    </tbody>
                </div>
        );
    }

}//Fin de Class DirectorioAdmin
export default DirectorioAdmin;