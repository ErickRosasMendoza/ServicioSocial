import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import HeaderDEyAE from './HeaderDEyAE';
import { Link } from 'react-router-dom';
import DirectorioAlumno from './DirectorioAlumno';
import Global from '../Global';
import SubirDictamen from './SubirDictamen';
import VerDatosDictamen from './VerDatosDictamen';
import Cookies from 'universal-cookie';
import Footer from './Footer';

const cookies = new Cookies();

class Dictamen extends React.Component {

    url = Global.url;

    creditosRef = React.createRef();

    state = {
        idAlumno: cookies.get('idAlumno'),
        statusCreditos: null,
        dictamen: {},
        status: "null"
    };

    changeState = () => {
        this.setState({
            dictamen: {
                porcentajeCreditos: this.creditosRef.current.value,
                semestre: "SEPTIMO",
                estado: "NUEVO",
                idAlumno: this.state.idAlumno,
                idDictamen: this.state.idAlumno
            }
        });
    }

    saveDictamen = async (e) => {
        this.changeState();
        if(this.state.dictamen.porcentajeCreditos && this.state.dictamen.porcentajeCreditos != null && this.state.dictamen.porcentajeCreditos != undefined){
         await axios.post(this.url + "dictamen/save", this.state.dictamen)
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
                    statusCreditos: "false"
                }
            );
        }//Fin de else % de Creditos
    }//Fin de funcion saveDictamen()
    render() {
        if(this.state.status == 'true'){
            window.location.href = './CrearDictamen';
        }

        return (
            <div className="center">
            <HeaderDEyAE />
                <DirectorioAlumno />
                        <div id="sidebar" className="dictamenLeft">
                            <div>
                                <label htmlFor="creditos" className="text_login">Porcentaje de Creditos</label>
                                <input type="text" className="input_login" name="creditos" placeholder="Ingresa el % de creditos sin decimales" ref={this.creditosRef} onChange={this.changeState}/>
                                {(() => {
                                    switch(this.state.statusCreditos){   
                                        case "false":
                                        return (
                                        <a className="warning">¡Ingresa tu porcentaje de creditos sin decimales!</a>
                                        );
                                        break;
                                        default:
                                            break;
                                    }
                                })()}       
                            </div>
                            <br/>
                                <button className = "btn"  onClick = {this.saveDictamen}>Aceptar</button>
                          </div>
                       <SubirDictamen/>
                       <VerDatosDictamen/>
            </div>
        );
    }
}
export default Dictamen;
