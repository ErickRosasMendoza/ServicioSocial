import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Global from '../Global';
import md5 from 'md5';

const cookies = new Cookies();

class DatosActualizadosEmail extends React.Component {

    url = Global.url;

    contraseñaRef = React.createRef();
    emailRef = React.createRef();
    confirmarContraseñaRef = React.createRef();
    nuevaContraseñaRef = React.createRef();
    nuevoEmailRef = React.createRef();
    confirmarNuevaContraseña = React.createRef();

    state = {
        confirmarContraseña: "",
        idUsuario: cookies.get('idUsuario'),
        statusEmail: null,
        statusContraseña: null,
        statusConfirmar: null,
        statusNuevoEmail: null,
        statusNuevaContraseña: null,
        statusNuevaConfirmar: null,
        usuario: {},
        email: "",
        contraseña: "",
        status: "null",
        searchEmail: {},
        emailExist: null
    };

    changeState = async (e) => {
        
       await this.setState({
            usuario: {
                email: this.nuevoEmailRef.current.value,
                contraseña: md5(this.nuevaContraseñaRef.current.value),
                tipoUsuario: this.props.tipoUsuario,
                idUsuario: this.state.idUsuario
            },
            confirmarContraseña: md5(this.confirmarNuevaContraseña.current.value),
            contraseña: this.contraseñaRef.current.value,
            email: this.emailRef.current.value
        });  
    }//Fin de changeState

    searchEmail = () => {
        axios.get(this.url + "usuario/findEmail/" + this.nuevoEmailRef.current.value)
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

    update = () =>{
        this.changeState();
        this.searchEmail();
        if(this.state.email && this.state.email != null && this.state.email != undefined){
            if(this.contraseñaRef.current.value && this.contraseñaRef.current.value != null && this.contraseñaRef.current.value != undefined){
                axios.get(this.url + "usuario/findEmail/" + this.emailRef.current.value)
                .then(res =>{
                    if(this.nuevoEmailRef.current.value && this.nuevoEmailRef.current.value != null && this.nuevoEmailRef.current.value != undefined){
                        if(this.nuevoEmailRef.current.value == this.emailRef.current.value){
                            if(this.nuevaContraseñaRef.current.value && this.nuevaContraseñaRef.current.value != null && this.nuevaContraseñaRef.current.value != undefined){
                                if(this.state.usuario.contraseña == this.state.confirmarContraseña){
                                    axios.patch(this.url + "usuario/update", this.state.usuario)
                                    .then(res => {
                                        this.setState(
                                            {
                                                status: "true"
                                            }
                                        );
                                    })
                                    .then(res =>{
                                        cookies.set('email', this.nuevoEmailRef.current.value, { path: "/" })
                                        console.log(cookies.get('contraseña') + " email de las cookies")
                                    })
                                }else{
                                    this.setState(
                                        {
                                            statusNuevaConfirmar: "false"
                                        }
                                    );
                                }//Fin de Nueva Contraseña Confirmada
                            }else{
                                this.setState(
                                    {
                                        statusNuevaContraseña: "false"
                                    }
                                );
                            }//Fin de else Nueva Contraseña
                        }else if(this.state.emailExist == "true"){
                            if(this.nuevaContraseñaRef.current.value && this.nuevaContraseñaRef.current.value != null && this.nuevaContraseñaRef.current.value != undefined){
                                if(this.state.usuario.contraseña == this.state.confirmarContraseña){
                                    axios.patch(this.url + "usuario/update", this.state.usuario)
                                    .then(res => {
                                        this.setState(
                                            {
                                                status: "true"
                                            }
                                        );
                                    })
                                    .then(res =>{
                                        cookies.set('email', this.nuevoEmailRef.current.value, { path: "/" })
                                        console.log(cookies.get('contraseña') + " email de las cookies")
                                    })
                                }else{
                                    this.setState(
                                        {
                                            statusNuevaConfirmar: "false"
                                        }
                                    );
                                }//Fin de Nueva Contraseña Confirmada
                            }else{
                                this.setState(
                                    {
                                        statusNuevaContraseña: "false"
                                    }
                                );
                            }//Fin de else Nueva Contraseña
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
                                statusNuevoEmail: "false"
                            }
                        );
                    }//Fin de else Nuevo Email
                })
            }else{
                this.setState(
                    {
                        statusContraseña: "false",
                        statusEmail: "false"
                    }
                );
            }//fin de else contraseña 
        }else{
            this.setState(
                {
                    statusEmail: "false"
                }
            );
        }//Fin de else email
    }//Fin de update

    render() {
        if(this.state.status === 'true'){
            window.location.href = './' + this.props.redirect
        }

        return (
            <div className = "center">
                <div id="sidebar" className="registroAlumno">
                    <div>
                    <label htmlFor="email" className="text_login">Email</label>
                    <input type="email" className="input_login" name="email" ref={this.emailRef} placeholder="Ingresa quí tu correo electrónico" onChange={this.changeState}/>
                        {(() => {
                        switch(this.state.statusEmail){   
                        case "false":
                        return (
                        <a className="warning">¡Ingresa tu correo electrónico para verificar que eres tu!</a>
                            );
                            break;
                        default:
                        break;
                        }
                        })()}
                    </div>
                    <div>
                        <label htmlFor="contraseña" className="text_login">Contraseña</label>
                        <input type="password" className="input_login" name="contraseña" ref={this.contraseñaRef} placeholder="Ingresa aquí tu contraseña" onChange={this.changeState}/>
                            {(() => {
                            switch(this.state.statusContraseña){   
                            case "false":
                                return (
                                <a className="warning">¡Ingresa tu contraseña para verificar que eres tu!</a>
                                );
                                break;
                            default:
                                break;
                                }   
                                })()}
                    </div>
                    <div>
                    <label htmlFor="nuevoEmail" className="text_login">Nuevo Email</label>
                    <input type="email" className="input_login" name="nuevoEmail" ref={this.nuevoEmailRef} placeholder="Ingresa quí tu nuevo correo electrónico" onChange={this.changeState}/>
                        {(() => {
                        switch(this.state.statusNuevoEmail){   
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
                        <label htmlFor="nuevaContraseña" className="text_login">Nueva Contraseña</label>
                        <input type="password" className="input_login" name="nuevaContraseña" ref={this.nuevaContraseñaRef} placeholder="Ingresa aquí tu nueva contraseña" onChange={this.changeState}/>
                            {(() => {
                            switch(this.state.statusNuevaContraseña){   
                            case "false":
                                return (
                                <a className="warning">¡Ingresa una Nueva Contraseña!</a>
                                );
                                break;
                            default:
                                break;
                                }   
                                })()}
                    </div>
                    <div>
                        <label htmlFor="nuevaContraseñaConfirmar" className="text_login">Confirma Nueva Contraseña</label>
                        <input type="password" className="input_login" name="nuevaContraseñaConfirmar" ref={this.confirmarNuevaContraseña} placeholder="Confirma aquí tu nueva contraseña" onChange={this.changeState}/>
                        {(() => {
                        switch(this.state.statusNuevaConfirmar){   
                        case "false":
                            return (
                            <a className="warning">¡Verifica tu Nueva Contraseña!</a>
                            );
                            break;
                        default:
                            break;
                            }   
                            })()}
                            </div>
                            <br/>
                            <button  className = "btn" onClick = {this.update}>Aceptar</button>
                        </div>
		    </div>
        );
    }
}//Fin de classs DatosActualizadosEmail
export default DatosActualizadosEmail;
