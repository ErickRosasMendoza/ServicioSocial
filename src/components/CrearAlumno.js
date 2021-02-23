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
<<<<<<< HEAD
        contraseñaConfirmar: "false",
        usuario:{
            email:"false"
        },
        
    
        status: "null",
        emailExist: null
=======
        statusConfirmar: null,
        usuario: {},
        email: "",
        contraseña: "",
        status: null,
        searchEmail: {},
        emailExistente: null,
        ayuda: "false"
>>>>>>> acde98aeb3bfea9752fb6f06605454a60335089b
    };


    

    changeStateEmail =  async(e) => {
        
       await this.setState({
            usuario: {
                email: this.emailRef.current.value,
              /* contraseña: this.contraseñaRef.current.value,
                tipoUsuario: "false"*/
            },
<<<<<<< HEAD
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


=======
            confirmarContraseña: md5(this.confirmarContraseñaRef.current.value),
            contraseña: this.contraseñaRef.current.value,
            email: this.emailRef.current.value,
            emailExistente: null,
        });
       // console.log(this.state.usuario.email);
        //console.log(this.state.usuario.contraseña)    
    }

    saveAlumno = async (e) => {
        this.changeState();
        if(this.state.email && this.state.email !== null &&this.state.email !== undefined){
            if(this.state.contraseña && this.state.contraseña !== null && this.state.contraseña !== undefined){
                if(this.confirmarContraseñaRef.current.value && this.confirmarContraseñaRef.current.value !== null && this.confirmarContraseñaRef.current.value !== undefined){
                    if(this.state.usuario.contraseña == this.state.confirmarContraseña){
                        axios.get(this.url+"usuario/findEmail/"+this.state.email)
                        .then(res =>{
                            this.setState({
                                emailExistente: "true",
                                ayuda: "true",
                                statusEmail: "true",
                                statusContraseña: "true",
                                statusConfirmar: "true"
                            });
                        })
                        .catch(error =>{
                            this.setState({
                                emailExistente: "false"
                            });
                        })
                        .then(res => {
                            if(this.state.emailExistente == "false"){
                                if(this.state.ayuda == "false"){
                                    axios.post(this.url+"usuario/save", this.state.usuario)
                                    .then(res =>{
                                        this.setState({
                                            status: "true"
                                        });
                                    });
                                }else{
                                    this.setState({
                                        ayuda: "false",
                                        emailExistente: "true",
                                        statusConfirmar: "true",
                                        statusContraseña: "true",
                                        statusEmail: "true"
                                    });
                                }
                            }else{
                                this.setState({
                                    emailExistente: "true",
                                    ayuda: "false"
                                });
                            }//Fin de else Email Existe
                        })
                    }else{
                        this.setState({
                            statusConfirmar: "false",
                            statusContraseña: "true",
                            statusEmail: "true"
                        });
                    }//Fin de else comparando contraseñas
                }else{
                    this.setState({
                        statusConfirmar: "false",
                        statusContraseña: "true",
                        statusEmail: "true"
                    });
                }//Fin de else confirmar contraseña
            }else{
                this.setState({
                    statusContraseña: "false",
                    statusEmail: "true"
                });
            }//Fin de else contraseña
        }else{
            this.setState({
                statusEmail: "false"
            });
        }//Fin de else email
    }//fin de saveAlumno
   
>>>>>>> acde98aeb3bfea9752fb6f06605454a60335089b
    render() {
        if(this.state.status === 'true'){
           // alert("USUARIO REGISTRADO CON EXITO")
            return <Redirect to = "/IniciarSesion"></Redirect>
<<<<<<< HEAD
            
=======
>>>>>>> acde98aeb3bfea9752fb6f06605454a60335089b
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
                            <a className = "text-logo"><strong>Departamento de Extensión</strong></a>
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
<<<<<<< HEAD
                                switch(this.state.emailExist){   
=======
                                switch(this.state.emailExistente){   
>>>>>>> acde98aeb3bfea9752fb6f06605454a60335089b
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
<<<<<<< HEAD
                                <label htmlFor="contraseñaconfirm" className="text_login">Confirma Contraseña</label>
                                <input type="password" className="input_login" name="contarseñaconfirm" ref={this.confirmarContraseñaRef} placeholder="Confirma aquí tu contraseña" onChange={this.changeStateContraseña}/>
=======
                                <label htmlFor="contraseñaConfirm" className="text_login">Confirma Contraseña</label>
                                <input type="password" className="input_login" name="contraseñaConfirm" ref={this.confirmarContraseñaRef} placeholder="Confirma aquí tu contraseña" onChange={this.changeState}/>
>>>>>>> acde98aeb3bfea9752fb6f06605454a60335089b
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
                            <button  className = "btn" onClick = {this.saveAlumno}>Aceptar</button>
                        </div>
		    </div>
        );
    }
}
export default CrearAlumno;
