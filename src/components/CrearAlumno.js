import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo2 from '../assets/images/ipnLogo.png'
import Slider from './Slider';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Global from '../Global';

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
        usuario: {},
        status: "null"
    };

    changeState = async (e) => {
       await this.setState({
            usuario: {
                email: this.emailRef.current.value,
                contraseña: this.contraseñaRef.current.value,
                tipoUsuario: "false"
            },
            confirmarContraseña: this.confirmarContraseñaRef.current.value
        });
    }

    saveUsuario = (e) => {
        this.changeState();
        if(this.state.usuario.email && this.state.usuario.email != null && this.state.usuario.email != undefined){
                if(this.state.usuario.contraseña && this.state.usuario.contraseña != null && this.state.usuario.contraseña != undefined){
                    if(this.state.usuario.contraseña === this.state.confirmarContraseña){
                        axios.post(this.url+"usuario/save", this.state.usuario)
                        .then(res => {
                            this.setState(
                                {
                                    status: "true"
                                }
                            );
                        })
                        alert("USUARIO REGISTRADO CON EXITO")
                    }else{
                        alert("TU CONTRASEÑA NO COINCIDE")
                    window.location.href = './Registrarse';
                    }
                }else{
                    alert("VERIFICA TU CONTRASEÑA")
                    window.location.href = './Registrarse';
                }
        }else{
            alert("VERIFICA TU CORREO")
            window.location.href = './Registrarse';
        }
    }
    render() {
        if(this.state.status === 'true'){
            return <Redirect to = "/IniciarSesion"></Redirect>
        }

        return (
            <div className = "center">
                <section id = "content">
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
                                <input type="text" className="input_login" name="email" ref={this.emailRef} placeholder="email@dominio" onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="contraseña" className="text_login">Contraseña</label>
                                <input type="password" className="input_login" name="contarseña" ref={this.contraseñaRef} placeholder="Contraseña" onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="contraseñaconfirm" className="text_login">Confirma Contraseña</label>
                                <input type="password" className="input_login" name="contarseñaconfirm" ref={this.confirmarContraseñaRef} placeholder="Contraseña" onChange={this.changeState}/>
                            </div>
                            <br/>
                            <button  className = "btn" onClick = {this.saveUsuario}>Aceptar</button>
                        </div>
		        </section>
		    </div>
        );
    }
}
export default CrearAlumno;
