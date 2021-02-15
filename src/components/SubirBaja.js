import React from 'react';
import { Redirect , Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Cookies from 'universal-cookie';
import BorrarDoc from './BorrarDoc';

const cookies = new Cookies();

class SubirBaja extends React.Component {

    url = Global.url;
    
    state = {
        idSolicitud: cookies.get('idAlumno'),
        file: null,
        status: null,
        lista: {},
        listar:[],
        fileName: ""
    };

    componentWillMount = () => {
        this.getLista();
    } 

    fileChange = (event) => {
       this.setState({
            file: event.target.files[0]
        });
    }

    getLista = () => {
        axios.get(this.url+"lista/findBaja/" + this.state.idSolicitud)
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
                axios.post(this.url + "docBaja/upload/" + this.state.file.name + this.state.idSolicitud, fd)
                    .then(res =>{
                        this.setState({
                            lista:{
                                idAlumno: cookies.get('idAlumno'),
                                nombreDoc: res.data,
                                idTramite: 3,
                                idDoc: res.data + this.state.idSolicitud,
                                comentario: ""
                            }
                        })
                        this.guardarLista();
                        alert("DOCUMENTO GUARDADO CON EXITO")
                    });
        }else{
            alert("SELECCIONA UN ARCHIVO PARA SUBIR")
            window.location.href = './CrearBaja';
        }//Fin de else file
        
    }//Fin de funcion upLoad

/*    downLoad = () =>{
        const archivo = new FormData();
        axios.get("http://localhost:8080/file/getFile/5")
        .then(res =>{
            archivo.append('file', this.state.res, this.state.res.name);
            this.setState({
                file: this.archivo
            })
            console.log(this.state.file.name)
        });
    } */
    render() {
        if(this.state.status == 'true'){
            window.location.href = './CrearBaja';
        }
        if(this.state.listar.length >=1){
        return (
            <div className="center">
                        <div id="sidebar" className="bajaRight">
                            <div>
                                    {this.state.listar.map((lista1, i) =>
                                        <tbody key={i}>
                                            <tr>
                                                <td>{lista1.nombreDoc}</td>
                                                <td><Link to={'/PdfBaja/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                                <td><Link to={'/DocBaja/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                                <td><BorrarDoc
                                                idLista={lista1.idLista}
                                                idDoc={lista1.idDoc}
                                                url= "docBaja/deleteDoc/"
                                                redirect= "CrearBaja"
                                                /></td>
                                            </tr>
                                    </tbody>
                                    )}
                                    <input type="file" name = "file" onChange={this.fileChange} />
                                </div>
                                <br/>
                                <button className="btn"  onClick = {this.upLoad}>Subir Archivo</button>
                        </div>           
            </div>
        );
    }else if(this.state.listar.length == 0){
        return (
            <div className="center">
                        <div id="sidebar" className="bajaRight">
                            <div>
                                Aun no hay archivos guardados
                                    <input type="file" name = "file" onChange={this.fileChange} />
                            </div>
                            <br/>
                            <button className="btn"  onClick = {this.upLoad}>Subir Archivo</button>
                        </div>           
            </div>
        );
    }else{
        return (
            <div className="center">
                        <div id="sidebar" className="bajaRight">
                            <div>
                                Cargando... Espere un momento
                                    <input type="file" name = "file" onChange={this.fileChange} />
                            </div>
                            <br/>
                            <button className="btn"  onClick = {this.upLoad}>Subir Archivo</button>
                        </div>           
            </div>
        );
    }
}//Fin de Render 
}//Fin de Class SubirBaja
export default SubirBaja;
