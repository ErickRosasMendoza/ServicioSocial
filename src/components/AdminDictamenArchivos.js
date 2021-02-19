import React from 'react';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import BorrarDoc from './BorrarDoc';

class AdminDictamenArchivos extends React.Component {

    url = Global.url;
    
    comentarioRef=React.createRef();

    state = {
        idAlumno: this.props.id,
        file: null,
        status: null,
        lista: {},
        listar:[],
        fileName: "",
        comentar: ""
    };

    componentWillMount = () => {
        this.getLista();
    } 

    changeState = () => {
        this.setState({
            comentar: this.comentarioRef.current.value
        });
    }

    fileChange = (event) => {
       this.setState({
            file: event.target.files[0]
        });
    }

    getLista = () => {
        axios.get(this.url + "lista/findDictamen/" + this.props.id)
            .then(response => {
                this.setState({
                    listar: response.data,
                });
            });
    }

    guardarLista = async (e) => {
        await axios.post(this.url + "lista/save", this.state.lista)
        .then(res => {
            this.setState({
                status: "true"
            });
        });
    }

    upLoad = () => {
        if(this.state.file && this.state.file != null && this.state.file != undefined){
            const fd = new FormData();
            console.log(this.state);
            fd.append('file', this.state.file, this.state.file.name)
            console.log(this.state.file.name)
                axios.post(this.url + "docDictamen/upload/" + this.state.file.name + this.props.id, fd)
                    .then(res =>{
                        this.setState({
                            lista:{
                                idAlumno: this.props.id,
                                nombreDoc: res.data,
                                idTramite: 1,
                                idDoc: res.data + this.props.id,
                                comentario: this.state.comentar
                            }
                        })
                        this.guardarLista();
                    });
        }else{
            alert("SELECCIONA UN ARCHIVO PARA SUBIR")
        }//Fin de else file
    }//Fin de funcion upLoad
    render() {
        if(this.state.status == "true"){
            window.location.href = './' + this.props.id;
        }
        if(this.state.listar.length >=1){
            return (
                <div className="center">
                            <div id="sidebar" className="dictamenAdminCenter">
<<<<<<< HEAD
                               <strong>Documentación de dictamende menos de 70% de Creditos</strong> 
=======
                                <strong>DOCUMENTACIÓN DE DICTAMEN MENOS DE 70% DE CREDITOS</strong>
>>>>>>> 75b277c2ac0b97dd4d32892b9e7db16636c5e88f
                                <div>
                                    <br/>
                                    <tbody>
                                        <tr>
<<<<<<< HEAD
                                            <td className = "table_lista">Archivo</td>
                                            <td className = "table_lista">Comentario</td>
=======
                                            <td className="table_lista"><strong>Archivo</strong></td>
                                            <td className="table_lista"><strong>Comentario</strong></td>
>>>>>>> 75b277c2ac0b97dd4d32892b9e7db16636c5e88f
                                        </tr>
                                    </tbody>
                                    {this.state.listar.map((lista1, i) =>
                                        <tbody key={i}>
                                            <tr>
<<<<<<< HEAD
                                                <td className = "table_lista">{lista1.nombreDoc}</td>
                                                <td className = "table_lista">{lista1.comentario}</td>
=======
                                                <td className="table_lista">{lista1.nombreDoc}</td>
                                                <td className="table_lista">{lista1.comentario}</td>
>>>>>>> 75b277c2ac0b97dd4d32892b9e7db16636c5e88f
                                                <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                                <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                                <td> <BorrarDoc
                                                idLista={lista1.idLista}
                                                idDoc={lista1.idDoc}
                                                url= "docDictamen/deleteDoc/"
                                                redirect={lista1.idAlumno}
                                                /></td>
                                            </tr>
                                    </tbody>
                                    )}
                                    <br/>
<<<<<<< HEAD
                                    <a className = "text_login"> Subir Archivo</a>
=======
                                    <a className="text_login">Subir Archivo</a>
>>>>>>> 75b277c2ac0b97dd4d32892b9e7db16636c5e88f
                                    <input type="file" name = "file" onChange={this.fileChange} />
                                </div>
                                <div>
                                    <label htmlFor="comentario" className="text_login">Comentario Informativo</label>
                                    <input type="text" className="input_login" name="comentario" placeholder="Ingrese un mensaje informativo" ref={this.comentarioRef} onChange={this.changeState}/>
                                </div>
                                <br/>
                                <button className="btn"  onClick = {this.upLoad}>Subir Archivo</button> 
                            </div>
                </div>
            );
        }else if(this.state.listar.length == 0){
            return (
                <div className="center">
                            <div id="sidebar" className="dictamenAdminCenter">
                                <div>
                                <strong>SIN DOCUMENTACION PARA DICTAMEN DE 70%</strong>
                                <br/>
<<<<<<< HEAD
                                <a className = "text_login"> Subir Archivo</a>
=======
                                <a className="text_login">Subir Archivo</a>
>>>>>>> 75b277c2ac0b97dd4d32892b9e7db16636c5e88f
                                    <input type="file" name = "file"  onChange={this.fileChange} />
                                </div>
                                <div>
                                    <label htmlFor="comentario" className="text_login">Comentario Informativo</label>
                                    <input type="text" className="input_login" name="comentario" placeholder="Ingrese un mensaje informativo" ref={this.comentarioRef} onChange={this.changeState}/>
                                </div>
                                <br/>
                                <button className="btn"  onClick = {this.upLoad}>Subir Archivo</button> 
                            </div>
                </div>
            );
        }else{
            return (
            <div className="center">
                        <div id="sidebar" className="dictamenAdminCenter">
                            <div>
                                Cargando... Espere un momento
                                <input type="file" name = "file" onChange={this.fileChange} />
                            </div>
                            <div>
                                <label htmlFor="comentario" className="text_login">Comentario Informativo</label>
                                <input type="text" className="input_login" name="comentario" placeholder="Ingrese un mensaje informativo" ref={this.comentarioRef} onClick={this.upLoad}/>
                            </div>
                            <button className="btn"  onClick = {this.upLoad}>Subir Archivo</button> 
                        </div>
            </div>
        );
    }
    }//Fin de Render
}//Fin de Class SubirDictamen
export default AdminDictamenArchivos;
