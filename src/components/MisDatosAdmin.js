import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class MisDatosAdmin extends React.Component{

    url = Global.url;

    state = {
        admin: {},
        usuario: {},
        idUsuario: cookies.get('idUsuario'),
        email: cookies.get('email'),
        status: null
    };
        componentWillMount() {
            this.getAdmin();
        }

        getAdmin = () => {
            axios.get(this.url +"admin/findIdUsuario/"+ this.state.idUsuario)
            .catch(error=>{
                    alert("REGISTRA TUS DATOS PERSONALES")
                    window.location.href = '/DatosAdmin';
            })
            .then(res => {
                    this.setState({
                        admin: res.data,
                        status: 'success'
                       });
            })
        }//Fin de funcion getAdmin()
        
    render() {
            return(
                <div className="center">
                <Slider
                title="DATOS PERSONALES"
                size="slider-small"
                />
                <DirectorioAdmin/>
                <br/>
                    <tbody >
                        <tr >
                            <th className="table">Nombre</th>
                            <th className="table">Telefono</th>
                            <th className="table">Correo</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="table"> {this.state.admin.nombre} {this.state.admin.apellidos}</td>
                            <td className="table"> {this.state.admin.telefono}</td>
                            <td className="table"> {this.state.email}</td>
                        </tr>
                        </tbody>
                </div>
            );
  
}//Fin de Render ()
}//Fin de Classs MisDatosAdmin

export default MisDatosAdmin;