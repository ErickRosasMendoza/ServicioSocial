import React from 'react';
import Slider from './Slider';
import SideBar from './SideBar';

class Formulario extends React.Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    descripcionRef = React.createRef();
    hombreRef = React.createRef();
    mujerRef = React.createRef();
    otroRef = React.createRef();

    state = {
        user:{}
    };


    recibirFormulario = (evento) => {

        evento.preventDefault();
       
      
        var genero = 'hombre';

        if(this.hombreRef.current.checked){
            genero = this.hombreRef.current.value;
        }else if(this.mujerRef.current.checked){
            genero = this.mujerRef.current.value;
        }else {genero= this.otroRef.current.value;
        }
        
        var user = {
            nombre:this.nombreRef.current.value,
            apellidos:this.apellidosRef.current.value,
            descripcion:this.descripcionRef.current.value,
            genero:genero
        };
        console.log(user);
        this.setState({
            user: user
        });
    

        }




    render() {
        console.log(this.props)
        if(this.state.user.nombre){
            var user = this.state.user;
        }

        return (
   
  
            <form id="formulario" onSubmit={this.recibirFormulario} onChange = {this.recibirFormulario}  >
                 { this.state.user.nombre &&
                <div id = "user-data">
                <p><strong>Nombre: {user.nombre}</strong></p>
                <p><strong>Apellidos: {user.apellidos}</strong></p>
                <p><strong>Descripcion: {user.descripcion}</strong></p>
                <p><strong>Genero: {user.genero}</strong></p>
                </div>

            }

                <Slider
                    title="Formulario"

                    size="slider-small"
                />


                <div id="center" className="clearfix" >
                    <br />


                    <div className="form-group" >
                        <label htmlFor="nombre" >Nombre</label><br />
                        <input type="text" name="nombre" ref={this.nombreRef} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos" >Apellidos</label><br />
                        <input type="text" name="apellidos"  ref={this.apellidosRef} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descripcion" >Descripcion</label><br />
                        <textarea name="descripcion" ref={this.descripcionRef}></textarea>
                    </div>


                    <div className="form-radio">
                        <label htmlFor="genero">Género</label><br />


                        <input type="radio" value="hombre" ref={this.hombreRef} />hombre<br />
                        <input type="radio" value="mujer" ref={this.mujerRef}/>mujer<br />
                        <input type="radio" value="otro" ref={this.otroRef} />otro

				    </div >

                    <br />
                    <input type="submit" value="Enviar" className="btn btn-success form-radio" />




                </div>
            </form>


        );
    }
}

export default Formulario;