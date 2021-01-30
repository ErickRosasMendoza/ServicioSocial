import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Formulario from './Formulario';
import Slider from './Slider';
import Clientes from './Clientes';
//import Global from '../Global';

class CreateUsuario extends React.Component {
    nombreRef = React.createRef();
    idRef = React.createRef();
    //claveRef = React.createRef();
    imagenRef = React.createRef();

    state = {
        usuario: {},
        status: "null",
        file: null



    };

    changeState = () => {
        this.setState({
            usuario: {
                id: this.idRef.current.value,
                nombre: this.nombreRef.current.value,
                //clave: this.claveRef.current.value,

            }

        });
        console.log(this.state);
    }


    saveArticle = (e) => {
        //e.preventDefault();
        //alert(this.idRef.current.value);
        this.changeState();
        axios.post("http://localhost:8080/cliente/save", this.state.usuario)
            .then(res => {

                this.setState(
                    {
                        //usuario: res.data.usuario,
                        status: "true"
                    }
                );
               // console.log(this.state.status);
               /*if(this.state.status !=="null"){
                console.log(this.state.status);
               }*/

                



            });
            

    }

    fileChange = (event) => {
       // console.log(event.target.files[0]);
       this.setState({
            file: event.target.files[0]
        });
        console.log(this.state); 
        
    }
    upLoad = () => {
        
        this.saveArticle();
        const fd = new FormData();


        console.log(this.state);
     
        fd.append('file', this.state.file, this.state.file.name)
        axios.post("http://localhost:8080/file/upload", fd)
                .then(res =>{
                    console.log(res);
                });

    }

    render() {

        if(this.state.status === 'true'){
            return <Redirect to = "/blog"></Redirect>
        }
    
      


        return (



            <div className="center">
                <section id="content">
                    <Slider
                        title="Crear Usuario"
                        size="slider-small"
                    />

                   
                 

                        <div className="form-group" >
                            <label htmlFor="nombre" >Nombre</label><br />
                            <input type="text" name="nombre" ref={this.nombreRef} onChange={this.changeState} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id" >ID</label><br />
                            <input type="text" ref={this.idRef} onChange={this.changeState} />
                        </div>
                        {/*
                        <div className="form-group">
                            <label htmlFor="clave" >Clave</label><br />
                            <input type="text" ref={this.claveRef} onChange={this.changeState} />
                          
                        </div>
                        */}
                        <div className="form-group">
                            <label htmlFor="file" >imagen</label><br />
                            <input type="file" name = "file" onChange={this.fileChange} />
                          
                        </div>

                
                       <button  onClick = {this.upLoad} link to="/clientes" >guardar</button>
                       
                        
                 






                   
                </section>

            </div>

        );


    }
}
export default CreateUsuario;
