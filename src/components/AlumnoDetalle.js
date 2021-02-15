import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DirectorioAdmin from './DirectorioAdmin';
import Global from '../Global';

class AlumnoDetalle extends React.Component{

    url = Global.url;

    state = {
        alumno: {},
        idAlumno: "",
        servicioSocial: {},
        solicitudBaja:{},
        liberacionExtemp:{},
        dictamen: {},
        docServicio: {},
        status: null
        
    };
        componentWillMount() {
            //this.getImage();
            const { match: { params } } = this.props;
            console.log(params.id)
            var id = params.id;
            
            this.setState({
                    idAlumno: id
            })
        }
        componentDidMount(){
            console.log(this.state.idAlumno);
            this.getAlumno();
            this.getBaja();
            this.getServicio();
            this.getLiberacion();
            this.getDictamen();
        }
        getAlumno = () => {
            axios.get(this.url +"alumno/find/"+this.state.idAlumno)
            .then(response => {
               this.setState({
                alumno: response.data,
                status: 'success'
               });
               // fd.prependData ('file', this.file.data, 'luis')
                  // fd.append('file', this.state.file, response.file.name)
               console.log(this.state.alumno.nombre);
             } );
        
    }
    getServicio = () => {
        axios.get(this.url +"servicioSocial/findIdAlumno/"+this.state.idAlumno)
        .then(response => {
           this.setState({
            servicioSocial: response.data,
            status: 'success'
           });
           // fd.prependData ('file', this.file.data, 'luis')
              // fd.append('file', this.state.file, response.file.name)
           console.log(this.state.alumno.nombre);
         } );   
    }
    getDocServicio = () => {
        axios.get(this.url +"docServicio/getFile/1")
        .then(response => {
           this.setState({
            docServicio: response.data,
            status: 'success'
           });
           // fd.prependData ('file', this.file.data, 'luis')
              // fd.append('file', this.state.file, response.file.name)
           console.log(this.state.alumno.nombre);
         } );   
    }
    getBaja = () => {
        axios.get(this.url +"solicitudBaja/findIdAlumno/"+this.state.idAlumno)
        .then(response => {
        this.setState({
            solicitudBaja: response.data,
            status: 'success'
        });
        // fd.prependData ('file', this.file.data, 'luis')
            // fd.append('file', this.state.file, response.file.name)
        console.log(this.state.alumno.nombre);
        } );   
    }
    getLiberacion = () => {
        axios.get(this.url +"liberacionExtemporanea/findIdAlumno/"+this.state.idAlumno)
        .then(response => {
        this.setState({
            liberacionExtemp: response.data,
            status: 'success'
        });
        // fd.prependData ('file', this.file.data, 'luis')
            // fd.append('file', this.state.file, response.file.name)
        console.log(this.state.alumno.nombre);
        } );   
    }
    getDictamen = () => {
        axios.get(this.url +"dictamen/findIdAlumno/"+this.state.idAlumno)
        .then(response => {
        this.setState({
            dictamen: response.data,
            status: 'success'
        });
        // fd.prependData ('file', this.file.data, 'luis')
            // fd.append('file', this.state.file, response.file.name)
        console.log(this.state.alumno.nombre);
        } );   
    }
    render() {
        if(this.state.servicioSocial.idAlumno && this.state.servicioSocial.idAlumno !== null && this.state.servicioSocial.idAlumno !=undefined){
            return(
                <React.Fragment>
                    <DirectorioAdmin/>
                    <article>
                        <h1>Servicio Social</h1>
                    <tbody >
                        <tr >
                            <th className="table">Nombre</th>
                            <th className="table">Apellido Paterno</th>
                            <th className="table">Apellido Materno</th>
                            <th className="table">Boleta</th>
                            <th className="table">Programa Academico</th>
                            <th className="table">Semestre</th>
                            <th className="table">Responsable Directorio</th>
                            <th className="table">Documentos Servicio Social</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="table"> {this.state.alumno.nombre}</td>
                            <td className="table"> {this.state.alumno.apellidoPaterno}</td>
                            <td className="table"> {this.state.alumno.apellidoMaterno}</td>
                            <td className="table"> {this.state.alumno.boleta}</td>
                            <td className="table"> {this.state.alumno.programaAcademico}</td>
                            <td className="table"> {this.state.servicioSocial.semestre} </td>
                            <td className="table"> {this.state.servicioSocial.responsableDirecto} </td>
                            <td className="table"> <Link to={'/DocServicio/' + this.state.servicioSocial.idServicio}> Documentos Servicio Social </Link></td>
                        </tr>
                        </tbody>
                      {/*<div>
                        < td src = {this.url+"docBaja/getFile/"+ this.state.idAlumno}></td>
                       < td src = {this.url+"docDictamen/getFile/"+ this.state.idAlumno}></td>
                       < td src = {this.url+"docLiberacion/getFile/"+ this.state.idAlumno}></td>
                       < td src = {this.url+"docServicio/getFile/"+ this.state.idAlumno}></ td>
                       </div>

                        <th className="table">Documentos Servicio Social</th>
                        <th className="table">Documentos Liberacion Extemporanea</th>
                        <th className="table">Documentos Dictamen</th>
                        <th className="table">Documentos Baja Servicio Social</th>
                       
                        <th className="table">Servicio Social</th>
                        <th className="table">Liberacion Extemporanea</th>
                        <th className="table">Dictamen del 70%</th>
                        <th className="table">Baja de Servicio</th>
                        
                       
                       */}
                       </article>
                </React.Fragment>
            );
        }else if(this.state.solicitudBaja.idAlumno && this.state.solicitudBaja.idAlumno !== null && this.state.solicitudBaja.idAlumno != undefined){
        return(
            <React.Fragment>
                <DirectorioAdmin/>
                <article>
                <tbody >
                    <tr >
                        <th className="table">Nombre</th>
                        <th className="table">Apellido Paterno</th>
                        <th className="table">Apellido Materno</th>
                        <th className="table">Boleta</th>
                        <th className="table">Programa Academico</th>
                        <th className="table">Semestre</th>
                        <th className="table">Tipo de Baja</th>
                        <th className="table">Egresado</th>
                        <th className="table">Numero de Registro SS</th>
                        <th className="table">Prestatario</th>
                        <th className="table">Programa de SS</th>
                        <th className="table">Fecha de Inicio</th>
                        <th className="table">Fecha de Termino</th>
                        <th className="table">Documentos Baja Servicio Social</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table"> {this.state.alumno.nombre}</td>
                        <td className="table"> {this.state.alumno.apellidoPaterno}</td>
                        <td className="table"> {this.state.alumno.apellidoMaterno}</td>
                        <td className="table"> {this.state.alumno.boleta}</td>
                        <td className="table"> {this.state.alumno.programaAcademico}</td>
                        <td className="table"> {this.state.solicitudBaja.semestre} </td>
                        <td className="table"> {this.state.solicitudBaja.tipoBaja} </td>
                        <td className="table"> {this.state.solicitudBaja.egresado} </td>
                        <td className="table"> {this.state.solicitudBaja.registroSS} </td>
                        <td className="table"> {this.state.solicitudBaja.prestatario} </td>
                        <td className="table"> {this.state.solicitudBaja.programaSS} </td>
                        <td className="table"> {this.state.solicitudBaja.fechaInicio} </td>
                        <td className="table"> {this.state.solicitudBaja.fechaTermino} </td>
                        <th className="table">Baja de Servicio</th>
                    </tr>
                    </tbody>
                   </article>
            </React.Fragment>
    
        );
    }else if(this.state.liberacionExtemp.idAlumno && this.state.liberacionExtemp.idAlumno !== null && this.state.liberacionExtemp.idAlumno !=undefined){
        return(
            <React.Fragment>
                <DirectorioAdmin/>
                <article>
                <tbody >
                    <tr >
                        <th className="table">Nombre</th>
                        <th className="table">Apellido Paterno</th>
                        <th className="table">Apellido Materno</th>
                        <th className="table">Boleta</th>
                        <th className="table">Programa Academico</th>
                        <th className="table">Semestre</th>
                        <th className="table">Telefono</th>
                        <th className="table">Egresado</th>
                        <th className="table">Numero de Registro SS</th>
                        <th className="table">Prestatario</th>
                        <th className="table">Programa de SS</th>
                        <th className="table">Fecha de Inicio</th>
                        <th className="table">Fecha de Termino</th>
                        <th className="table">Documentos Liberacion Extemporanea</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table"> {this.state.alumno.nombre}</td>
                        <td className="table"> {this.state.alumno.apellidoPaterno}</td>
                        <td className="table"> {this.state.alumno.apellidoMaterno}</td>
                        <td className="table"> {this.state.alumno.boleta}</td>
                        <td className="table"> {this.state.alumno.programaAcademico}</td>
                        <td className="table"> {this.state.liberacionExtemp.semestre} </td>
                        <td className="table"> {this.state.liberacionExtemp.telefono} </td>
                        <td className="table"> {this.state.liberacionExtemp.egresado} </td>
                        <td className="table"> {this.state.liberacionExtemp.registroSS} </td>
                        <td className="table"> {this.state.liberacionExtemp.prestatario} </td>
                        <td className="table"> {this.state.liberacionExtemp.programaSS} </td>
                        <td className="table"> {this.state.liberacionExtemp.fechaInicio} </td>
                        <td className="table"> {this.state.liberacionExtemp.fechaTermino} </td>
                        <th className="table">Liberacion Extemporanea</th>
                    </tr>
                    </tbody>
                   </article>
            </React.Fragment>
    
        );
    }else if(this.state.dictamen.idAlumno && this.state.dictamen.idAlumno !== null && this.state.dictamen.idAlumno != undefined){
        return(
            <React.Fragment>
                <DirectorioAdmin/>
                <article>
                <tbody >
                    <tr >
                        <th className="table">Nombre</th>
                        <th className="table">Apellido Paterno</th>
                        <th className="table">Apellido Materno</th>
                        <th className="table">Boleta</th>
                        <th className="table">Programa Academico</th>
                        <th className="table">Semestre</th>
                        <th className="table">% de Creditos</th>
                        <th className="table">Documentos Dictamen</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="table"> {this.state.alumno.nombre}</td>
                        <td className="table"> {this.state.alumno.apellidoPaterno}</td>
                        <td className="table"> {this.state.alumno.apellidoMaterno}</td>
                        <td className="table"> {this.state.alumno.boleta}</td>
                        <td className="table"> {this.state.dictamen.programaAcademico}</td>
                        <td className="table"> {this.state.dictamen.semestre} </td>
                        <td className="table"> {this.state.dictamen.porcentajeCreditos} </td>
                        <th className="table">Dictamen del 70%</th>
                        
                    </tr>
                    </tbody>
                   </article>
            </React.Fragment>
    
        );
    }
    else {
        return(
            <div><h1>El Alumno aun no realiza documentacion</h1></div>
        );
    }
}//Fin de Render ()
}//Fin de Classs AlumnoDetalle

export default AlumnoDetalle;