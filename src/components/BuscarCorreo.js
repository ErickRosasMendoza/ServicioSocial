import React from 'react';
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';

class BuscarCorreo extends React.Component {

    url = Global.url;

    correoRef = React.createRef();

    state = {
        usuario: {},
        status: null
    };

    changeState = () => {
        this.setState({
            usuario: {
                email: this.correoRef.current.value
            }
        });
        console.log(this.state);
    }

    saveArticle = (e) => {
        this.changeState();
        axios.get(this.url+"usuario/findEmail/" + this.state.usuario.email)
            .then(res => {
                console.log(this.state.usuario.email +"nombre antes de respuesta");
                console.log(this.state.usuario.idUsuario + "id antes de respuesta");
                this.setState(
                    {
                        usuario:res.data     
                    }
                );
                console.log(this.state.usuario.email + "correo despues de respuesta");
                console.log(this.state.usuario.idUsuario + "id despues de respuesta");
            });
    }

    render() {
        if(this.state.status === 'true'){
            return <Redirect to = "/"></Redirect>
        }
        return (
            <div className="center">
                <section id="content">
                        <div className="form-group" >
                            <label htmlFor="correo" >Buscar por correo</label>
                            <input type="text" name="correo" ref={this.correoRef} onChange={this.changeState} />
                        </div>
                       <button  onClick = {this.saveArticle}>Buscar</button>
                       <article>
                       <tbody >
                            <tr >
                                <th className="table">Id</th>
                                <th className="table">Email</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="table"> {this.state.usuario.idUsuario}</td>
                                <td className="table"> {this.state.usuario.email}</td>
                            </tr>
                        </tbody>
                </article>

                </section>
            </div>
        );
    }//Fin de Render
}//Fin de Buscar usuario
export default BuscarCorreo;