import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';
import DirectorioAdmin from './DirectorioAdmin';
import Global from '../Global';
import md5 from 'md5';

class CrearAdmin extends React.Component {

    url = Global.url;
    tipoUsuarioRef = React.createRef();
    contraseñaRef = React.createRef();
    emailRef = React.createRef();

    state = {
        usuario: {},
        statusEmail: null,
        statusContraseña: null,
        status: "null",
        searchEmail: {},
        emailExist: null
    };

    changeState = () => {
        this.setState({
            usuario: {
                email: this.emailRef.current.value,
                contraseña: md5(this.contraseñaRef.current.value),
                tipoUsuario: "true"
            }
        });
       // console.log(this.state + "Cambiando datos a usuario");
    }

    searchEmail = () => {
        axios.get(this.url + "usuario/findEmail/" + this.emailRef.current.value)
        .then(res => {
            this.setState({
                searchEmail: res.data
            })
        })
        .then(res => {
            this.setState({
                emailExist: "false"
            })
        })
        .catch(error => {
            this.setState({
                emailExist: "true"
            })
        })
    }//Fin de SearchEmail

    saveUsuario = (e) => {
        this.changeState();
        this.searchEmail();
        if(this.state.usuario.email && this.state.usuario.email != null && this.state.usuario.email != undefined){
            if(this.state.searchEmail == null || this.state.searchEmail == undefined){
                if(this.contraseñaRef.current.value && this.contraseñaRef.current.value != null && this.contraseñaRef.current.value != undefined){
                    axios.post(this.url+"usuario/save", this.state.usuario)
                    .then(res => {
                        this.setState({
                                    status: "true"
                                });
                            })
                    }else{
                        this.setState(
                            {
                                statusContraseña: "false"
                            }
                        );
                    }//Fin de else Contraseña
            }else{
                this.setState(
                    {
                        emailExist: "false"
                    }
                );
            }//Fin de else email existente
        }else{
            this.setState(
                {
                    statusEmail: "false"
                }
            );
        }//Fin de else Email
    }//Fin de Save Usuario
    render() {
        if(this.state.status == 'true'){
            return <Redirect to = "/Lista"></Redirect>
        }

        return (
            <div className="center">
                    <DirectorioAdmin />
                        <div id="sidebar" className="crearAdmin">
                            <div>
                                <label htmlFor="email" className="text_login">Email</label>
                                <input type="email" className="input_login" name="email" ref={this.emailRef} placeholder="Ingresa aquí el correo electrónico" onChange={this.changeState}/>
                                {(() => {
                                    switch(this.state.statusEmail){   
                                        case "false":
                                        return (
                                        <a className="warning">¡Ingresa un correo electronico valido!</a>
                                        );
                                        break;
                                        default:
                                            break;
                                    }
                                })()}  
                                {(() => {
                                    switch(this.state.emailExist){   
                                        case "false":
                                        return (
                                        <a className="warning">¡Este correo ya fue registrado!</a>
                                        );
                                        break;
                                        default:
                                            break;
                                    }
                                })()}  
                            </div>
                            <div>
                                <label htmlFor="contraseña" className="text_login">Contraseña</label>
                                <input type="text" className="input_login" name="contarseña" ref={this.contraseñaRef} placeholder="Ingresa aquí la contraseña" onChange={this.changeState}/>
                                {(() => {
                                    switch(this.state.statusContraseña){   
                                        case "false":
                                        return (
                                        <a className="warning">¡Ingresa una contraseña!</a>
                                        );
                                        break;
                                        default:
                                            break;
                                    }   
                                    })()}
                            </div>
                            <br/>
                            <button className = "btn" onClick = {this.saveUsuario}>Aceptar</button>
                          </div>
            </div>
        );
    }
}
export default CrearAdmin;
