import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo2 from '../assets/images/ipnLogo.png'
import Slider from './Slider';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Global from '../Global';
import md5 from 'md5';

const cookies = new Cookies();

class CrearAlumno extends React.Component {

    url = Global.url;

    tipoUsuarioRef = React.createRef();
    contraseñaRef = React.createRef();
    emailRef = React.createRef();
    confirmarContraseñaRef = React.createRef();

    state = {
        confirmarContraseña: "",
        idUsuario: cookies.get('idUsuario'),
        statusEmail: null,
        statusContraseña: null,
        statusConfirmar: null,
        usuario: {},
        status: "null"
    };

    changeState = async (e) => {
        
       await this.setState({
            usuario: {
                email: this.emailRef.current.value,
                contraseña: md5(this.contraseñaRef.current.value),
                tipoUsuario: "false"
            },
            confirmarContraseña: md5(this.confirmarContraseñaRef.current.value)
        });
       // console.log(this.state.usuario.email);
        //console.log(this.state.usuario.contraseña)
       
       
    }


    saveUsuario = (e) => {
        this.changeState();
  
        
        if(this.state.usuario.email && this.state.usuario.email != null && this.state.usuario.email != undefined){
                if(this.contraseñaRef.current.value && this.contraseñaRef.current.value != null && this.contraseñaRef.current.value != undefined){
                    if(this.state.usuario.contraseña === this.state.confirmarContraseña){
                        axios.post(this.url+"usuario/save", this.state.usuario)
                        .then(res => {
                            this.setState(
                                {
                                    status: "true"
                                }
                            );
                        })
                    }else{
                        this.setState(
                            {
                                statusConfirmar: "false"
                            }
                        );
                    }//Fin de else Confirmar Contraseña
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
                    statusEmail: "false"
                }
            );
        }//Fin de else Email
    }
    render() {
        if(this.state.status === 'true'){
            return <Redirect to = "/IniciarSesion"></Redirect>
            alert("USUARIO REGISTRADO CON EXITO")
        }

        return (
            <div className = "center">
                    <Slider
                        title="Registrarse"
                        size="slider-small"
                    />
		            <Link to = {'./IniciarSesion'} className= "registrarse">Iniciar Sesión</Link>
                        <div id="sidebar" className="registroAlumno">
                        <div>     
                            <img src={logo2} id="logo2" alt="politecnico" />
                            <br/> <br/> 
                            <a className = "text-logo"><strong>Departamento de Extensión</strong>  </a>
                            <a className = "text-logo"><strong>y Apoyos Educativos</strong></a>
                            </div>
                            <div className = "input-border">
                            <br/> <br/> <br/>
                                <label htmlFor="email" className="text_login">Email</label>
                                <input type="email" className="input_login" name="email" ref={this.emailRef} placeholder="Ingresa quí tu correo electrónico" onChange={this.changeState}/>
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
                            </div>
                            <div>
                                <label htmlFor="contraseña" className="text_login">Contraseña</label>
                                <input type="password" className="input_login" name="contarseña" ref={this.contraseñaRef} placeholder="Ingresa aquí tu contraseña" onChange={this.changeState}/>
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
                            <div>
                                <label htmlFor="contraseñaconfirm" className="text_login">Confirma Contraseña</label>
                                <input type="password" className="input_login" name="contarseñaconfirm" ref={this.confirmarContraseñaRef} placeholder="Confirma aquí tu contraseña" onChange={this.changeState}/>
                                {(() => {
                                switch(this.state.statusContraseña){   
                                    case "false":
                                    return (
                                    <a className="warning">¡Verifica tu Contraseña!</a>
                                    );
                                    break;
                                    default:
                                        break;
                                }   
                                })()}
                            </div>
                            <br/>
                            <button  className = "btn" onClick = {this.saveUsuario}>Aceptar</button>
                        </div>
		    </div>
        );
    }
}
export default CrearAlumno;
