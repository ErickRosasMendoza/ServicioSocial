import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderDEyAE from './HeaderDEyAE';
import DirectorioAlumno from './DirectorioAlumno';
import Global from '../Global';
import Cookies from 'universal-cookie';
import SubirLiberacion from './SubirLiberacion';
import VerDatosLiberacion from './VerDatosLiberacion';

const cookies = new Cookies();

class Liberacion extends React.Component {

    url = Global.url;
    
    registroSSRef = React.createRef();
    semestreRef = React.createRef();
    egresadoRef = React.createRef();
    prestatarioRef = React.createRef();
    programaSSRef = React.createRef();
    fechaInicioRef = React.createRef();
    fechaTerminoRef = React.createRef();
    telefonoRef = React.createRef();


    state = {
        idAlumno: cookies.get('idAlumno'),
        liberacion: {},
        status: "null"
    };

    changeState = () => {
        this.setState({
            liberacion: {
                egresado: this.egresadoRef.current.value,
                semestre: this.semestreRef.current.value,
                registroSS: this.registroSSRef.current.value,
                prestatario: this.prestatarioRef.current.value.toUpperCase(),
                programaSS: this.programaSSRef.current.value.toUpperCase(),
                fechaInicio: this.fechaInicioRef.current.value,
                fechaTermino: this.fechaTerminoRef.current.value,
                telefono: this.telefonoRef.current.value,
                idAlumno: this.state.idAlumno,
                idLiberacion: this.state.idAlumno
            }
        });
       // console.log(this.state + "Cambiando datos a usuario");
    }

    saveLiberacion = (e) => {
        this.changeState();
        if(this.state.liberacion.registroSS && this.state.liberacion.registroSS != null && this.state.liberacion.registroSS != undefined){
            if(this.state.liberacion.programaSS && this.state.liberacion.programaSS != null && this.state.liberacion.programaSS != undefined){
                if(this.state.liberacion.prestatario && this.state.liberacion.prestatario != null && this.state.liberacion.prestatario != undefined){
                    if(this.state.liberacion.telefono && this.state.liberacion.telefono != null && this.state.liberacion.telefono != undefined){
                        if(this.state.liberacion.fechaInicio && this.state.liberacion.fechaInicio != null && this.state.liberacion.fechaInicio != undefined){
                            if(this.state.liberacion.fechaInicio && this.state.liberacion.fechaInicio != null && this.state.liberacion.fechaInicio != undefined){
                                axios.post(this.url + "liberacionExtemporanea/save", this.state.liberacion)
                                    .then(res => {
                                        this.setState({
                                                status: "true"
                                            });
                                        })
                                        alert("DOCUMENTO GENERADO")
                            }else{
                                alert("LLENA EL CAMPO FECHA DE TERMINO")
                                window.location.href = './CrearLiberacion';
                            }//Fin de else Fecha de Termino
                        }else{
                            alert("LLENA EL CAMPO FECHA DE INICIO")
                            window.location.href = './CrearLiberacion';
                        }
                    }else{
                        alert("LLENA EL CAMPO TELEFONO")
                        window.location.href = './CrearLiberacion';
                    }//Fin de else Fecha de Inicio
                }else{
                    alert("LLENA EL CAMPO PRESTATARIO")
                    window.location.href = './CrearLiberacion';
                }//Fin de else Prestatario
            }else{
                alert("LLENA EL CAMPO PROGRAMA DE SERVICIO SOCIAL")
                window.location.href = './CrearLiberacion';
            }//Fin de else Programa de SS
        }else{
            alert("LLENA EL CAMPO NUMERO DE SERVICIO SOCIAL")
            window.location.href = './CrearLiberacion';
        }//Fin de else Numero de Registro de SS
    }//Fin de funcion saveLiberacion()
    render() {
        if(this.state.status == 'true'){
            window.location.href = './CrearLiberacion';
        }

        return (
            <div className="center">
            <HeaderDEyAE/>
                <DirectorioAlumno />
                        <div id="sidebar" className="liberacionLeft">
                            <div>
                               <label htmlFor="registroSS" className="text_login">Número de Registro Servicio Social</label>
                                <input type="text" className="input_login" name="registroSS" placeholder="Ingresa el número de registro del servicio social" ref={this.registroSSRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="programaSS" className="text_login">Programa de Servicio Social</label>
                                <input type="text" className="input_login" name="programaSS" placeholder="Ingresa el nombre del programa de servicio social" ref={this.programaSSRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="prestatario" className="text_login">Prestatario</label>
                                <input type="text" className="input_login" className="input_login" name="prestatario" placeholder="Ingresa el nombre de la Institución/Empresa/etc. donde realizas tu servicio social" ref={this.prestatarioRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="telefono" className="text_login">Número Telefónico</label>
                                <input type="text"  className="input_login" name="telefono" placeholder="Ingresa tu número telefónico" ref={this.telefonoRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="fechaInicio" className="text_login">Fecha de Inicio</label>
                                <input type="date" className="input_login" name="fechaInicio" ref={this.fechaInicioRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="FechaTermino" className="text_login">Fecha de Término</label>
                                <input type="date" className="input_login" name="fechaTermino" ref={this.fechaTerminoRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="egresado" className="text_login">Eres egresado?</label>
                                <select name="egresado" className="input_login" ref={this.egresadoRef} onChange={this.changeState}>
                                    <option value="True">SI, SI SOY EGRESADO</option>
                                    <option value="False">NO, NO SOY EGRESADO</option>
                                    </select>
                            </div>
                            <div>
                                <label htmlFor="semestre" className="text_login">Semestre</label>
                                <select name="semestre" className="input_login" ref={this.semestreRef} onChange={this.changeState}>
                                    <option value="SEPTIMO">SEPTIMO</option>
                                    <option value="OCTAVO">OCTAVO</option>
                                    <option value="NOVENO">NOVENO</option>
                                    <option value="null">SOY EGRESADO</option>
                                    </select>
                            </div>
                            <br/>
                            <button className="btn" onClick = {this.saveLiberacion}>Aceptar</button>
                          </div>
                          <SubirLiberacion/>
                          <VerDatosLiberacion/>
            </div>
        );
    }
}
export default Liberacion;
