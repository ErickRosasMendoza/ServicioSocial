import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Formulario from './Formulario';
import Slider from './Slider';
//import Global from '../Global';

class CreateArticle extends React.Component {
    nombreRef = React.createRef();
    idRef = React.createRef();
    claveRef = React.createRef();
     state = {
         usuario:{},
         status: null
             
     };

     changeState=()=>{
         this.setState({
             usuario: {
                 id: this.idRef.current.value,
                 nombre: this.nombreRef.current.value,
                 clave: this.claveRef.current.value
                
             }
         });
         console.log(this.state);
     }


    saveArticle = (e) =>{
        e.preventDefault();
         //alert(this.idRef.current.value);
         this.changeState();
         axios.post("http://localhost:8080/usuario/save", this.state.usuario)
         .then(res =>{
             
                 this.setState(
                     {
                         //usuario: res.data.usuario,
                         status: 'true'
                     }
                 );

             
             
             
         });
    }

    render() {

        return (



            <div className="center">
                <section id="content">
                    <Slider
                        title="Crear Usuario"
                        size="slider-small"
                    />


                    <form onSubmit = {this.saveArticle}>

                        <div className="form-group" >
                            <label htmlFor="nombre" >Nombre</label><br />
                            <input type="text" name="nombre" ref={this.nombreRef} onChange={this.changeState}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="id" >ID</label><br />
                            <input type="text" ref={this.idRef} onChange={this.changeState}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="clave" >Clave</label><br />
                            <input type="text" ref={this.claveRef} onChange={this.changeState}/>
                        </div>












                        <input type="submit" value="Enviar" className="btn btn-success form-radio" />


                    </form>
                </section>

            </div>

        );


    }
}
export default CreateArticle;
