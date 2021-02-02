import React from 'react';
import Slider from './Slider';
import SideBar from './SideBar';

class Formulario extends React.Component {

    mailRef = React.createRef();
    contraseñaRef = React.createRef();


    state = {
        user:{}
    };


    recibirFormulario = (evento) => {

        evento.preventDefault();
       
      

        
        var user = {
            mail:this.mailRef.current.value,
            contraseña:this.contraseñaRef.current.value,
        };
        console.log(user);
        this.setState({
            user: user
        });
    

        }




    render() {
        console.log(this.props)
        if(this.state.user.contraseña){
            var user = this.state.user;
        }

        return (
   
  
            <form id="formulario" onSubmit={this.recibirFormulario} onChange = {this.recibirFormulario}  >
                 { this.state.user.nombre &&
                <div id = "user-data">
                <p><strong>e-mail: {user.mail}</strong></p>
                <p><strong>contraseña: {user.contraseña}</strong></p>
                <p><strong>Descripcion: {user.descripcion}</strong></p>
                <p><strong>Genero: {user.genero}</strong></p>
                </div>

            }

                <Slider
                    title="iniciar sessión"

                    size="slider-small"
                />


                <div id="center" className="clearfix" >
                    <br />


                    <div className="form-group" >
                        <label htmlFor="mail" >E-mail</label><br />
                        <input type="text" name="mail" ref={this.mailRef} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contraseña" >Contraseña</label><br />
                        <input type="text" name="contraseña"  ref={this.contraseñaRef} />
                    </div>




                    <br />
                    <input type="submit" value="Aceptar" className="btn btn-success form-radio" />




                </div>
            </form>


        );
    }
}

export default Formulario;