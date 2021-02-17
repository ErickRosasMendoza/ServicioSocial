import React, {Component} from 'react';
import axios from 'axios';
import Slider from './Slider';
import { Link, Switch } from 'react-router-dom';
import DirectorioAdmin from './DirectorioAdmin';
import Cookies from 'universal-cookie';
import AlumnoDictamen from './AlumnoDictamen';
import AlumnoBaja from './AlumnoBaja';
import AlumnoServicio from './AlumnoServicio';
import AlumnoLiberacion from './AlumnoLiberacion';
const cookies = new Cookies();

class DirectorioArchivosAlumno extends Component{

    state = {
        idAlumno: "",
        idTramite: 0,
        status: null
    };

    componentWillMount() {
        const { match: { params } } = this.props;
        console.log(params.id)
        var id = params.id;
        this.setState({
                idAlumno: id
        })
        console.log(this.state.idAlumno)
    }

    tramite1=()=>{
        this.setState({
            idTramite: 1
        })
    }
    tramite2=()=>{
        this.setState({
            idTramite: 2
        })
    }
    tramite3=()=>{
        this.setState({
            idTramite: 3
        })
    }
    tramite4=()=>{
        this.setState({
            idTramite: 4
        })
    }

    render(){
       

            return(
              <div className = "center">
                        <DirectorioAdmin />
               
                <tbody>
                    <tr>
                        <tr>
                        <td>{this.state.idAlumno}</td>
                        </tr>
                        <tr>
                        <td>{this.state.idTramite}</td>
                        </tr>
                        <tr>
                        <td className="table_lista"> <button  class = "btn" onClick={this.tramite1} >Docuementacion Dictamen de 70%</button></td>
                        </tr>
                        <tr> 
                        <td className="table_lista"><button  class = "btn" onClick={this.tramite2} >Docuementacion Liberacion Extemporanea</button></td>
                        </tr>
                        <tr>
                        <td className="table_lista"><button  class = "btn" onClick={this.tramite3} >Documentacion Baja de Servicio Social</button></td> 
                        </tr>
                        <tr>
                        <td className="table_lista"><button  class = "btn" onClick={this.tramite4} >Docuementacion Servicio Social</button></td>
                        </tr>
                     </tr>   
                </tbody>
               
               
                {(() => {  
                    switch (this.state.idTramite){
                        case 1:
                            return (
                                <AlumnoDictamen
                                id = {this.state.idAlumno}/>
                              );
                        break;
                        case 2:
                            return(
                                <AlumnoLiberacion
                                id = {this.state.idAlumno}/>
                              ); 
                              break;  
                        case 3:
                            return(
                                <AlumnoBaja
                                id = {this.state.idAlumno}/>    
                            );
                        case 4:
                            return(
                                <AlumnoServicio
                                id = {this.state.idAlumno}/>
                            )
                         default: break;

                    }


                })()}

                 </div>
             );
             

        }   
    }
                    
                   
                
            

            




export default DirectorioArchivosAlumno;