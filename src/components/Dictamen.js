import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider';
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
    semestreRef = React.createRef();

    state = {
        idAlumno: cookies.get('idAlumno'),
        idDictamen: cookies.get('idDictamen'),
        dictamen: {},
        status: "null"
    };

    changeState = () => {
        this.setState({
            dictamen: {
                porcentajeCreditos: this.creditosRef.current.value,
                semestre: this.semestreRef.current.value,
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
            alert("DOCUMENTO GENERADO")
        }else{
            alert("LLENA EL CAMPO FECHA DE TERMINO")
            window.location.href = './CrearDictamen';
        }//Fin de else % de Creditos
    }//Fin de funcion saveDictamen()
    render() {
        if(this.state.status == 'true'){
            window.location.href = './CrearDictamen';
        }

        return (
            <div className="center">
                <DirectorioAlumno />
                        <div id="sidebar" className="dictamenLeft">
                            <div>
                                <label htmlFor="creditos" className="text_login">Porcentaje de Creditos</label>
                                <input type="text" className="input_login" name="creditos" placeholder="Ingresa el % de creditos sin decimales" ref={this.creditosRef} onChange={this.changeState}/>
                            </div>
                            <div>
                                <label htmlFor="semestre" className="text_login">Semestre</label>
                                <select name="semestre" className="input_login" ref={this.semestreRef} onChange={this.changeState}>
                                    <option value="SEPTIMO">SEPTIMO</option>
                                    <option value="OCTAVO">OCTAVO</option>
                                    <option value="NOVENO">NOVENO</option>
                                    </select>
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
