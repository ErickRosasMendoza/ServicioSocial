import React from 'react';
import axios from 'axios';
import logo2 from '../assets/images/ipnLogo.png'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Global from '../Global';
import Slider from './Slider';
import HeaderDEyAE from './HeaderDEyAE';

const cookies = new Cookies();

class IniciarSesion extends React.Component{

    url = Global.url;

    state = {
        email: cookies.get('email'),
        idUsuario: cookies.get('idUsuario'),
        form:{
            idUsuario:"",
            email:"",
            contraseña:"",
            tipoUsuario: ""
        }
    }

    handleChange = async (e) =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    login= async (e) =>{
        await axios.get(this.url + "usuario/findEmail/" + this.state.form.email)
        .then(response=>{
            return response.data;
            })
        .then(response=>{
            if(response.tipoUsuario == false){
                if(this.state.form.contraseña == response.contraseña){
                    cookies.set('idUsuario', response.idUsuario, {path:"/"})
                    cookies.set('email', response.email, {path:"/"})
                    window.location.href = "./MisDatosAlumno";
                }else{
                    alert("VERIFIQUE SU CONTRASEÑA");
                }
            }else if(response.tipoUsuario == true){
                if(this.state.form.contraseña == response.contraseña){
                    cookies.set('idUsuario', response.idUsuario, {path:"/"})
                    cookies.set('email', response.email, {path:"/"})
                    window.location.href = "./MisDatosAdmin";
                }else{
                     alert("VERIFIQUE SU CONTRASEÑA");
                 }
            }else{
                window.location.href = "./IniciarSesion";
            }
        })   
        .catch(error=>{
            console.log(error +" error en consulta");
            alert( "VERIFIQUE SU CORREO");
        })
    }
        render(){
            return(
                <div className = "center">
                    <Slider 
                    title="Iniciar Sesión"
                    size="slider-small"
                    />
                     <Link to = {'./Registrarse'}  class= "registrarse">Registrarse</Link>
                    <div id="sidebar">
                     <div>     
                        <img src={logo2} id="logo2" alt="politecnico" />
                        <br/> <br/> 
                        <a className = "text-logo"><strong>Departamento de Extensión</strong>  </a>
                        <a className = "text-logo"><strong>y Apoyos Educativos</strong></a>
                        </div>
                        <div className = "input-border" >
                        <br/> <br/> <br/>
                            <label htmlFor="email"  className="text_login">Correo electrónico </label>
                            <input type="text" className="input_login" name ="email" onChange = {this.handleChange} placeholder="email@dominio"/>
                        </div>
                        <div>
                            <label htmlFor="contraseña" className="text_login">Contraseña</label>
                            <input type="password" className="input_login" name = "contraseña" autoComplete="on" placeholder="*********"  onChange = {this.handleChange}/>
                        </div>
                        <br/>
                        <button  class = "btn" onClick = {this.login} >Aceptar</button>
                    </div>
                </div>
            );
        }
}

export default IniciarSesion;