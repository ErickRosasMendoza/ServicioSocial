import React from 'react';
import axios from 'axios';
import logo2 from '../assets/images/ipnLogo.png'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Global from '../Global';
import Slider from './Slider';
import HeaderDEyAE from './HeaderDEyAE';
import md5 from 'md5';


const cookies = new Cookies();

class IniciarSesion extends React.Component {

    url = Global.url;

    state = {
        email: cookies.get('email'),
        idUsuario: cookies.get('idUsuario'),
        statusPassword: "true",
        statusEmail:"true",
        form: {
            idUsuario: "",
            email: "",
            contraseña: "",
            tipoUsuario: ""
        }
    }

    handleChange = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    passwordChange = () => {
        this.setState({
            form: {
                contraseña: md5(this.state.form.contraseña)
            }
        })
        //console.log(this.state.form.contraseña)
    }

    login = async (e) => {
        this.passwordChange();
        await axios.get(this.url + "usuario/findEmail/" + this.state.form.email)
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.tipoUsuario == false) {
                    if (this.state.form.contraseña == response.contraseña) {
                        cookies.set('idUsuario', response.idUsuario, { path: "/" })
                        cookies.set('email', response.email, { path: "/" })
                        window.location.href = "./MisDatosAlumno";
                    } else {
                        this.setState({
                            statusPassword: "false"
                        });
                        //  alert("VERIFIQUE SU CONTRASEÑA");
                        console.log(this.state.statusPassword);

                    }
                } else if (response.tipoUsuario == true) {
                    if (this.state.form.contraseña == response.contraseña) {
                        cookies.set('idUsuario', response.idUsuario, { path: "/" })
                        cookies.set('email', response.email, { path: "/" })
                        window.location.href = "./MisDatosAdmin";
                    } else {
                        this.setState({
                            statusPassword:"false"
                        })
                        //alert("VERIFIQUE SU CONTRASEÑA");
                      //  window.location.href = "./IniciarSesion";
                    }
                } else {
                    window.location.href = "./IniciarSesion";
                }
            })
            .catch(error => {
               
                this.setState({
                        statusEmail:"false",
                       
                })
                //alert("VERIFIQUE SU CORREO");
                //window.location.href = "./IniciarSesion";
                console.log(error + "status mail" + this.state.email +  " error en consulta");
            })
    }

    render() {



        return (

            <div className= "center">
                <HeaderDEyAE />
                <Slider
                    title="Iniciar Sesión"
                    size="slider-small"
                />
                 <Link to={'./Registrarse'} class="registrarse">Registrarse</Link>
                     <div id="sidebar">
                             <img src={logo2} id="logo2" alt="politecnico" />
                             <br /> <br />
                             <a className="text-logo"><strong>Departamento de Extensión</strong>  </a>
                             <a className="text-logo"><strong>y Apoyos Educativos</strong></a>
                     </div>

                     <div className="input-border" >
                                 <br /> <br /> <br />
                     <label htmlFor="email" className="text_login">Correo electrónico </label>
                     <input type="email" className="input_login" name="email" onChange={this.handleChange} placeholder="Ingresa aquí tu correo electrónico" />
                     </div>
                     <div>
                         <label htmlFor="contraseña" className="text_login">Contraseña</label>
                            <input type="password" className="input_login" name="contraseña" autoComplete="on" placeholder="Ingresa aquí tu contraseña" onChange={this.handleChange} />
                     </div>
                            <br />
                                <button class="btn" onClick={this.login} >Aceptar</button>
            
           
                                
                     {(() => {
                         switch (this.state.statusPassword) {
                        case "false":
                            return (
                                <a className="warning">contraseña erronea</a>
                            );
                         }
                         switch(this.state.statusEmail){   
                            case "false":
                                return (
                                    <a className="warning">correo electrónico no valido</a>
                                );

                                 
                                }


                             })()}
                    
                              
                     </div>
                                
            
           
         );

            
                           
            
     }
        
}


export default IniciarSesion;