import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Global from '../Global';
import DirectorioAdmin from './DirectorioAdmin';
class ListaAlumnos extends Component{

    url = Global.url;
    state = {
        alumnos: [],
        status: null
    };

    componentWillMount() {
        this.getAlumnos();
        /*var id = this.props.search;
        if(id && id !=null && id != undefined){
            this.getAlumnosById(id);
        }
        else{
            this.getAlumnos();
        }*/
    }

    getAlumnos = () => {
        axios.get(this.url+"alumno/findAll")
            .then(response => {
                this.setState({
                    alumnos: response.data,
                    status: 'success'
                });
                console.log(this.state.alumnos);
            });
    }
    //Funcion Buscar por Id
/*    getAlumnosById = (id) => {
        axios.get(this.url+"alumno/find/"+id)
            .then(res => {
                this.setState({
                    alumnos: res.data,
                    status: 'success'
                });
            })
                .catch(err => {
                    this.setState({
                        alumnos: [],
                        status: 'success'
                    });
                });
                console.log(this.state.alumnos);
    }*/
    
render() {
    if(this.state.alumnos.length >=0){
        
        /*var listAlumnos = this.state.alumnos.map((alumno) =>{
            return(
                <article className="item-lista">
                     <tbody>
                            <tr>
                                <td className="table"> {alumno.nombre}</td>
                                <td className="table"> {alumno.apellidoPaterno}</td>
                                <td className="table"> {alumno.apellidoMaterno}</td>
                                <td className="table"> {alumno.email}</td>
                            </tr>
                        </tbody>
                </article>

            );
        });*/
        
       return (
        <React.Fragment>
            <DirectorioAdmin />
            <article>
                <tbody >
                    <tr >
                        <th className="table">Nombre</th>
                        <th className="table">Apellido Paterno</th>
                        <th className="table">Apellido Materno</th>
                        <th className="table">Boleta</th>
                        <th className="table">Programa Academico</th>
                    </tr>
                </tbody>
                {this.state.alumnos.map((alumno, i) =>
                    <tbody key={i}>
                    <tr>
                        <td className="table"> <Link to={'/AlumnoBaja/' + alumno.idAlumno}>{alumno.nombre}</Link></td>
                        <td className="table"> <Link to={'/AlumnoLiberacion/' + alumno.idAlumno}>{alumno.apellidoPaterno}</Link></td> 
                        <td className="table"> <Link to={'/AlumnoServicio/' + alumno.idAlumno}>{alumno.apellidoMaterno}</Link></td>
                        <td className="table"> <Link to={'/AlumnoDetalle/' + alumno.idAlumno}>{alumno.boleta}</Link></td>
                        <td className="table"> <Link to={'/AlumnoDictamen/' + alumno.idAlumno}>{alumno.programaAcademico}</Link></td>
                    </tr>
                </tbody>
                )
                }
            </article>
        </React.Fragment>
    );
    }else if(this.state.alumnos.length === 0 && this.state.status === 'success'){
        return(
            <div>
                <h1>No hay Alumnos para mostrar</h1>
                <p>An no hay contenido en esta seccion</p>
            </div>
        );
    }else{
        return(
            <div>
                <h1>Cargando...</h1>
                <p>Espere un momento</p>
            </div>
        );
    }
       /* return (
            <React.Fragment>
                <DirectorioAdmin/>
                <article className="item-lista">
                    <tbody >
                        <tr >
                            <th className="table">Nombre</th>
                            <th className="table">Apellido Paterno</th>
                            <th className="table" >Apellido Paterno</th>
                            <th className="table">Email</th>
                        </tr>
                    </tbody>

                    {this.state.alumnos.map((alumno, i) =>
                     <tbody key={i}>
                            <tr>
                                <td className="table"> {alumno.nombre}</td>
                                <td className="table"> {alumno.apellidoPaterno}</td>
                                <td className="table"> {alumno.apellidoMaterno}</td>
                                <td className="table"> {alumno.email}</td>
                            </tr>
                        </tbody>
                    )
                    }
                </article>
            </React.Fragment>
        );*/
    }//Fin de Render
}//Fin de Class ListaAlumnos
export default ListaAlumnos;