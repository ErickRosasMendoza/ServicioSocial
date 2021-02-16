import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';
import DirectorioAdmin from './DirectorioAdmin';
import Global from '../Global';

class CrearAdmin extends React.Component {

    url = Global.url;
    tipoUsuarioRef = React.createRef();
    contraseñaRef = React.createRef();
    emailRef = React.createRef();

    state = {
        usuario: {},
        status: "null"
    };

    changeState = () => {
        this.setState({
            usuario: {
                email: this.emailRef.current.value,
                contraseña: this.contraseñaRef.current.value,
                tipoUsuario: "true"
            }
        });
       // console.log(this.state + "Cambiando datos a usuario");
    }

    saveUsuario = (e) => {
        this.changeState();
         axios.post(this.url+"usuario/save", this.state.usuario)
            .then(res => {
               // console.log(this.state.usuario.idUsuario + "idUsuario Antes de guardar Usuario");
                this.setState(
                    {
                        status: "true"
                    }
                );
                console.log(this.state.usuario + " Usuario Despues de Guardar Usuario");
            });
    }
    render() {
        if(this.state.status === 'true'){
            return <Redirect to = "/Lista"></Redirect>
        }

        return (
            <div className="center">
                    <DirectorioAdmin />
                        <div id="sidebar" className="crearAdmin">
                            <div>
                                <label htmlFor="email" className="text_login">Email</label>
                                <input type="text" className="input_login" name="email" ref={this.emailRef} placeholder="email@dominio" onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="contraseña" className="text_login">Contraseña</label>
                                <input type="text" className="input_login" name="contarseña" ref={this.contraseñaRef} placeholder="Contraseña" onChange={this.changeState}/>
                            </div>
                            <br/>
                            <button className = "btn" onClick = {this.saveUsuario}>Aceptar</button>
                          </div>
            </div>
        );
    }
}
export default CrearAdmin;
