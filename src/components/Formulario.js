import React from 'react';
import Slider from './Slider';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Formulario extends React.Component {
    nombreRef = React.createRef();
    idRef = React.createRef();
    state = {
        user:{}
    };




        changeState = () => {
            this.setState({
                user: {
                    id: this.idRef.current.value,
                    nombre: this.nombreRef.current.value,
    
                }
    
            });
            console.log(this.state);
        }


        enviarUsuario = (e) => {
            this.changeState();
            axios.post("http://localhost:8080/cliente/logging", this.state.user)
                .then(res => {
                    console.log(this.state);
                });
            }




    render() {


        return (
   
  
            <form id="formulario"  >
              
              
            

                <Slider
                    title="iniciar sessión"

                    size="slider-small"
                />


                <div id="center" className="clearfix" >
                    <br />


                    <div className="form-group" >
                        <label htmlFor="nombre" >E-mail</label><br />
                        <input type="text" name="mail" ref={this.nombreRef} onChange={this.changeState} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="id" >Contraseña</label><br />
                        <input type="text" name="contraseña" ref={this.idRef} onChange={this.changeState}/>
                    </div>




                    <br />
                    <input type="submit" value="Aceptar" className="btn btn-success form-radio" onClick = {this.enviarUsuario} />




                </div>
            </form>


        );
    }
}

export default Formulario;