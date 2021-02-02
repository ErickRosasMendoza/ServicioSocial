import React, {Component} from 'react';

class DirectorioAdmin extends Component{
    
    render(){
        return(
            <div className="center">
            <nav id="menu">
				<ul>
					<li>
						<a activeClassName = "active">Buscar Alumno</a>
					</li>
					<li>
						<a activeClassName = "active">Realizar Servicio Social</a>
					</li>
					<li>
					    <a activeClassName = "active">Dictamen del 70% </a>
					</li>
					<li>
						<a activeClassName = "active">Solicitud Baja</a>
					</li>
                    <li>
						<a activeClassName = "active">Liberacion Extemporanea</a>
					</li>
                    <li>
						<a activeClassName = "active">Mis Datos</a>
					</li>
				</ul>
			</nav>
            </div>
        )
    };

}//Fin de Class DirectorioAdmin
export default DirectorioAdmin;