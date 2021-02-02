import React from 'react';
import logo from '../assets/images/esimelogo.png';
import logo2 from '../assets/images/polilogo.png'
import {NavLink} from 'react-router-dom';
import DirectorioAdmin from './DirectorioAdmin';

class HeaderDEyAE extends React.Component{

    render(){
        return(
            <React.Fragment>
            <header id = "header">
			<div><img src={logo} id="logo" alt="esime" /><img src={logo2} id="logo2" alt="politecnico" /><strong>Escuela Superior de Ingeniería Mecánica y Eléctrica Zacatenco<br></br>
				Oficina de Servicio Social<br></br>
				Departamento de Extensión y Apoyos Educativos</strong>
				</div>
		</header>

        <DirectorioAdmin/>
        </React.Fragment>
        );//Fin de Return
    }//Fin de Render
}//Fin de Class ErickComponente

export default HeaderDEyAE;