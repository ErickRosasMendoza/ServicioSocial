import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderDEyAE from './HeaderDEyAE';
import axios from 'axios';
import DirectorioAlumno from './DirectorioAlumno';
import Global from '../Global';
import Cookies from 'universal-cookie';
import SubirServicio from './SubirServicio';
import VerDatosServicio from './VerDatosServicio';

const cookies = new Cookies();

class ServicioSocial extends React.Component {

    url = Global.url;
    semestreRef = React.createRef();
    responsableDirectoRef = React.createRef();


    state = {
        idAlumno: cookies.get('idAlumno'),
        statusResponsable: null,
        servicio: {},
        status: "null"
    };

    changeState = () => {
        this.setState({
            servicio: {
                semestre: this.semestreRef.current.value,
                responsableDirecto: this.responsableDirectoRef.current.value.toUpperCase(),
                estado: "NUEVO",
                idAlumno: this.state.idAlumno,
                idServicio: this.state.idAlumno
            }
        });
       // console.log(this.state + "Cambiando datos a usuario");
    }

    saveServicio = (e) => {
        this.changeState();
        if(this.state.servicio.responsableDirecto && this.state.servicio.responsableDirecto != null && this.state.servicio.responsableDirecto != undefined){
            axios.post(this.url + "servicioSocial/save", this.state.servicio)
            .then(res => {
                this.setState(
                    {
                        status: "true"
                    }
                );
            })
        }else{
            this.setState(
                {
                    statusResponsable: "false"
                }
            );
        }//Fin de else Responsable Directo
    }//Fin de funcion saveServicio()
    render() {
        if(this.state.status == 'true'){
            window.location.href = './CrearServicio';
        }

        return (
            <div className="center">
            <HeaderDEyAE/>
                <DirectorioAlumno />
                        <div id="sidebar" className="servicioLeft">
                            <div>
                                <label htmlFor="responsable" className="text_login">Responsable Directo</label>
                                <input type="text" className="input_login" name="responsable" placeholder="Ingresa el nombre de tu responsable directo" ref={this.responsableDirectoRef} onChange={this.changeState}/>
                                {(() => {
                                    switch(this.state.statusResponsable){   
                                        case "false":
                                        return (
                                        <a className="warning">¡Ingresa el nombre de tu Responsable Directo!</a>
                                        );
                                        break;
                                        default:
                                            break;
                                    }
                                })()}      
                            </div>
                            <div>
                                <label htmlFor="semestre" className="text_login">Semestre</label>
                                <select name="semestre" className="input_login" ref={this.semestreRef} onChange={this.changeState}>
                                    <option value="SEPTIMO">SEPTIMO</option>
                                    <option value="OCTAVO">OCTAVO</option>
                                    <option value="NOVENO">NOVENO</option>
                                    <option value="EGRESADO">EGRESADO</option>
                                    </select>
                            </div>
                            <br/>
                            <button className="btn" onClick = {this.saveServicio}>Aceptar</button>
                          </div>
                          <SubirServicio/>
                          <VerDatosServicio/>
            </div>
        );
    }
}
export default ServicioSocial;
