import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Slider from './Slider';
import Global from '../Global';
import DirectorioArchivosAlumno from './DirectorioArchivosAlumno';

class AlumnoDictamen extends React.Component{

    url = Global.url;

    state = {
        listar: [],
        idAlumno: "",
        dictamen: {},
        alumno: {},
        statusDictamen: null,
        statusLista: null
    };
        componentWillMount = () =>{
            this.getAlumno();
          this.getDictamen();
            this.getLista();
        }
        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+ this.props.id)
            .then(response => {
            this.setState({
                alumno: response.data,
            });
            } );   
        }//Fin de getAlumno()
        getDictamen = () => {
            axios.get(this.url +"dictamen/findIdAlumno/"+ this.state.idAlumno)
            .then(response => {
            this.setState({
                dictamen: response.data,
                statusDictamen: 'success'
            });
            } );   
        }


    getLista = () => {
        axios.get(this.url+"/lista/findDictamen/" + this.props.id)
            .then(response => {
                this.setState({
                    listar: response.data,
                    statusLista: 'success'
                });
            });
    }//Fin de getLista

    render(){
        if(this.state.statusDictamen == 'success' && this.state.statusLista == 'success'){
            return(
                <div className="center">
                    <div id="sidebar" className="dictamenAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                    <td><button id="btn_delete"  onClick = "">Eliminar</button></td>
                                </tr>
                            </tbody>
                        )}
                       
                    </div>
                </div>
            );
        }else if(this.state.statusDictamen == 'success' && this.state.statusLista != 'success'){
            return(
                <div className="center">

                    <div id="sidebar" className="dictamenAdminRight">
                        No hay archivos guardados
                    </div>
                </div>
            );
        }else if(this.state.statusDictamen != 'success' && this.state.statusLista == 'success'){
            return(
                <div className="center">                   
                    <div id="sidebar" className="infoAdminCenter">
                        Aun no hay datos registrados para esta documentación
                    </div>
                    <div id="sidebar" className="dictamenAdminRight">
                        {this.state.listar.map((lista1, i) =>
                            <tbody key={i}>
                                <tr>
                                    <td>{lista1.nombreDoc}</td>
                                    <td><Link to={'/PdfDictamen/' + lista1.idDoc}target="_blank" id="btn_watch">Ver Archivo</Link></td>
                                    <td><Link to={'/DocDictamen/' + lista1.idDoc}target="_blank" id="btn_downLoad">Descargar</Link></td>
                                    <td><button id="btn_delete"  onClick = "">Eliminar</button></td>
                                </tr>
                            </tbody>
                        )}
                 </div>
                </div>
            );
        }else{
            return(
                <div className="center">
                    <div id="sidebar" className="dictamenAdminRight">
                    No hay archivos guardados
                </div>
            </div>
        );
        }
}//Fin de Render ()
}//Fin de Classs AlumnoDictamen
export default AlumnoDictamen;