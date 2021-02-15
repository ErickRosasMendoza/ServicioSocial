import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';
import DirectorioAlumno from './DirectorioAlumno';
import Global from '../Global';
import Cookies from 'universal-cookie';
import SubirBaja from './SubirBaja';
import VerDatosBaja from './VerDatosBaja';

const cookies = new Cookies();

class Baja extends React.Component {

    url = Global.url;

    registroSSRef = React.createRef();
    semestreRef = React.createRef();
    egresadoRef = React.createRef();
    prestatarioRef = React.createRef();
    programaSSRef = React.createRef();
    fechaInicioRef = React.createRef();
    fechaTerminoRef = React.createRef();
    tipoDeBajaRef = React.createRef();
    idAlumno = React.createRef();


    state = {
        idAlumno: cookies.get('idAlumno'),
        baja: {},
        status: "null"
    };

    changeState = () => {
        this.setState({
            baja: {
                egresado: this.egresadoRef.current.value,
                semestre: this.semestreRef.current.value,
                registroSS: this.registroSSRef.current.value,
                prestatario: this.prestatarioRef.current.value,
                programaSS: this.programaSSRef.current.value,
                fechaInicio: this.fechaInicioRef.current.value,
                fechaTermino: this.fechaTerminoRef.current.value,
                tipoDeBaja: this.tipoDeBajaRef.current.value,
                idAlumno: this.state.idAlumno,
                idSolicitud: this.state.idAlumno
            }
        });
       // console.log(this.state + "Cambiando datos a usuario");
    }

    saveBaja = (e) => {
        this.changeState();
        if(this.state.baja.registroSS && this.state.baja.registroSS != null && this.state.baja.registroSS != undefined){
            if(this.state.baja.programaSS && this.state.baja.programaSS != null && this.state.baja.programaSS != undefined){
                if(this.state.baja.prestatario && this.state.baja.prestatario != null && this.state.baja.prestatario != undefined){
                    if(this.state.baja.fechaInicio && this.state.baja.fechaInicio != null && this.state.baja.fechaInicio != undefined){
                        if(this.state.baja.fechaTermino && this.state.baja.fechaTermino != null && this.state.baja.fechaTermino != undefined){
                            axios.post(this.url + "solicitudBaja/save", this.state.baja)
                            .then(res => {
                            // console.log(this.state.usuario.idUsuario + "idUsuario Antes de guardar Usuario");
                                this.setState(
                                    {
                                        status: "true"
                                    }
                                );
                            })
                            alert("DOCUMENTO GENERADO")
                        }else{
                            alert("LLENA EL CAMPO FECHA DE TERMINO")
                            window.location.href = './CrearBaja';
                        }
                    }else{
                        alert("LLENA EL CAMPO FECHA DE INICIO")
                        window.location.href = './CrearBaja';
                    }//Fin de else Fecha Inicio
                }else{
                    alert("LLENA EL CAMPO PRESTATARIO")
                    window.location.href = './CrearBaja';
                }//Fin de else Prestatario
            }else{
                alert("LLENA EL CAMPO PROGRAMA DE SERVICIO SOCIAL")
                window.location.href = './CrearBaja';
            }//Fin de else Programa de SS
        }else{
            alert("LLENA EL CAMPO NUMERO DE SERVICIO SOCIAL")
            window.location.href = './CrearBaja';
        }//Fin de else Numero de Registro de SS
    }//Fin de Funcion saveBaja
    render() {
        if(this.state.status == 'true'){
            window.location.href = './CrearBaja';
        }

        return (
            <div className="center">
            <Slider
            title="DOCUMENTACIÓN BAJA DE SERVICIO SOCIAL"
            size="slider-small"
            />
                <DirectorioAlumno />
                        <div id="sidebar" className="bajaLeft">
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
                                <input type="text" className="input_login" name="prestatario" placeholder="Ingresa el nombre de la Institución/Empresa/etc. donde realizas tu servicio social" ref={this.prestatarioRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="fechaInicio" className="text_login">Fecha de Inicio</label>
                                <input type="date" className="input_login" name="fechaInicio" ref={this.fechaInicioRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="fechaTermino" className="text_login">Fecha de Término</label>
                                <input type="date" className="input_login" name="fechaTermino" ref={this.fechaTerminoRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="tipoBaja" className="text_login">Tipo de Baja</label>
                                <select name="tipoBaja" className="input_login" ref={this.tipoDeBajaRef} onChange={this.changeState}>
                                    <option value="SIN RECONOCIMIENTO DE HORAS">SIN RECONOCIMIENTO DE HORAS</option>
                                    <option value="CON RECONOCIMIENTO DE HORAS">CON RECONOCIMIENTO DE HORAS</option>
                                    <option value="POR MOVILIDAD ACADÉMICA">POR MOVILIDAD ACADÉMICA</option>
                                    </select>
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
                                    <option value="7">SEPTIMO</option>
                                    <option value="8">OCTAVO</option>
                                    <option value="9">NOVENO</option>
                                    <option value="null">EGRESADO</option>
                                    </select>
                            </div>
                            <br/>
                            <button className="btn" onClick = {this.saveBaja}>Aceptar</button>
                          </div>
                          <SubirBaja/>
                          <VerDatosBaja/>
            </div>
        );
    }
}
export default Baja;
