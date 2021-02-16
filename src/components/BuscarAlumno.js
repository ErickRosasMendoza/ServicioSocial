import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import Slider from './Slider';
import { Redirect } from 'react-router-dom';
import DirectorioAdmin from './DirectorioAdmin';
import BuscarCorreo from './BuscarCorreo';

class BuscarAlumno extends React.Component {

    url = Global.url;

    nombreRef = React.createRef();

    state = {
        alumnos: [],
        nombre: "",
        status: null
    };

    changeState = () => {
        this.setState({
                nombre: this.nombreRef.current.value
        });
    }

    searchAlumno = (e) => {
        this.changeState();
        axios.get(this.url + "alumno/findNombre/" + this.state.nombre)
            .then(res => {
                this.setState(
                    {
                        alumnos:res.data     
                    }
                );
            });
    }//Fin de searchAlumno

    render() {
      /*  if(this.state.status === 'true'){
            return <Redirect to = "/"></Redirect>
        }*/
        return (
            <div className="center">
                <DirectorioAdmin />
                <section id="content">
                        <div className="form-group" >
                            <label htmlFor="nombre" className="text_login">Buscar por Nombre</label>
                            <input type="text"  className="input_login" name="nombre" ref={this.nombreRef} onChange={this.changeState} />
                        </div>
                       <button  onClick = {this.searchAlumno}>BUSCAR</button>
                                <tbody >
                                    <tr >
                                        <th className="table_lista">Nombre</th>
                                        <th className="table_lista">Apellido Paterno</th>
                                        <th className="table_lista">Apellido Materno</th>
                                        <th className="table_lista">Boleta</th>
                                        <th className="table_lista">Programa Academico</th>
                                    </tr>
                                </tbody>
                            {this.state.alumnos.map((alumno, i) =>
                                <tbody key={i}>
                                    <tr>
                                        <td className="table_lista">{alumno.nombre}</td>
                                        <td className="table_lista">{alumno.apellidoPaterno}</td>
                                        <td className="table_lista">{alumno.apellidoMaterno}</td>
                                        <td className="table_lista"><Link to={'/AlumnoDetalle/' + alumno.idAlumno}>{alumno.boleta}</Link></td>
                                        <td className="table_lista">{alumno.programaAcademico}</td>
                                    </tr>
                                </tbody>
                            )}
                </section>
            </div>
        );
    }//Fin de Render
    
}//Fin de Buscar Alumno
export default BuscarAlumno;