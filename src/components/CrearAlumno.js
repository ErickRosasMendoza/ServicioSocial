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

    constructor (props){
        super(props);
        this.state = {
                usuario:{
                    contraseña: "false"
                }
        }

        var luis = "";
    }
    

    tipoUsuarioRef = React.createRef();
    contraseñaRef = React.createRef();
    emailRef = React.createRef();
    confirmarContraseñaRef = React.createRef();

    state = {
   
        idUsuario: cookies.get('idUsuario'),
        statusEmail: null,
        statusContraseña: null,
        contraseñaConfirmar: "false",
        usuario:{
            email:"false"
        },
        
    
        status: "null",
        emailExist: null
    };


    

    changeStateEmail =  async(e) => {
        
       await this.setState({
            usuario: {
                email: this.emailRef.current.value,
              /* contraseña: this.contraseñaRef.current.value,
                tipoUsuario: "false"*/
            },
           // confirmarContraseña: this.confirmarContraseñaRef.current.value,
            
        });
      console.log(this.props.luis + "____confirmarContraseña");
        console.log(this.state.usuario.contraseña + "____contraseña  dentro de usuario");
        console.log(this.state.usuario.email + "email en el state")

   if(this.state.usuario.email != null || this.state.usuario.email != undefined ){
           
    this.setState(
        {
            usuario:{
                email: "true"
            }
        }
    );
   }
}  
           
       changeStateContraseña=async(e)=>{
        await this.setState({
            usuario: {
               email:"false",
              contraseña: this.contraseñaRef.current.value,
               
            },
         
            
        });
        console.log(this.state.usuario.contraseña + "____contraseña  dentro de usuario");
        console.log(this.state.usuario.email + "email dentro del change de contraseña")
       }    
           
           /*
                   if(this.state.usuario.contraseña == null || this.state.usuario.contraseña == undefined ||this.state.usuario.contraseña =="false" ){

                    






                                                    if(this.state.contraseñaConfirmar ==null ||this.state.contraseñaConfirmar==undefined||this.state.contraseñaConfirmar=="false")
                                                      {
                                                     this.setState({
                                                    contraseñaConfirmar: "false"
                                                     })
                                                     console.log(this.state.contraseñaConfirmar + "confirmar contraseña dentro de la validacion")
                                                    }
                 }else
                 {
                this.setState({
                    usuario:{
                        contraseña: "false"
                    }
                   })
                   }
   
        }
          else{
            this.setState(
                {
                    usuario:{
                        email: "false"
                    }
                }
            );
            
        }*/

    




    
           // console.log(this.state.emailExist)
           
  

    saveUsuario = (e) => {
    
            /*this.changeState();    
        if(this.state.usuario.email != null || this.state.usuario.email != undefined ||this.state.usuario.contraseña =="false"){
            if(this.state.usuario.contraseña == null || this.state.usuario.contraseña == undefined || this.state.usuario.contraseña=="false"){
                       console.log(this.state.usuario.contraseña + "dentro del iff");
            }else
            {
                this.setState({
                    usuario:{
                        contraseña: "false"
                    }
                })
            }
   

        }else{
            this.setState(
                {
                    usuario:{
                        email: "false"
                    }
                }
            );
            console.log(this.state.usuario.email)
        }//Fin de else Email
        */
    }


    render() {
        if(this.state.status === 'true'){
           // alert("USUARIO REGISTRADO CON EXITO")
            return <Redirect to = "/IniciarSesion"></Redirect>
            
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
                                <input type="email" className="input_login" name="email" ref={this.emailRef} placeholder="Ingresa quí tu correo electrónico" onChange={this.changeStateEmail}/>
                                {(() => {
                                switch(this.state.usuario.email){   
                                    case "false":
                                    return (
                                    <a className="warning">¡Ingresa un correo electronico!</a>
                                    );
                                
                                }
                            })()}
                            {(() => {
                                switch(this.state.emailExist){   
                                    case "true":
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
                                <input type="password" className="input_login" name="contarseña" ref={this.contraseñaRef} placeholder="Ingresa aquí tu contraseña" onChange={this.changeStateContraseña}/>
                                {(() => {
                                switch(this.state.usuario.contraseña){   
                                    case "false":
                                    return (
                                    <a className="warning">¡Ingresa una contraseña!</a>
                                    );
                                
                                 
                                }   
                                })()}
                            </div>
                            <div>
                                <label htmlFor="contraseñaconfirm" className="text_login">Confirma Contraseña</label>
                                <input type="password" className="input_login" name="contarseñaconfirm" ref={this.confirmarContraseñaRef} placeholder="Confirma aquí tu contraseña" onChange={this.changeStateContraseña}/>
                                {(() => {
                                switch(this.state.contraseñaConfirmar){   
                                    case "false":
                                    return (
                                    <a className="warning">¡Verifica tu Contraseña!</a>
                                    );
                                  
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
