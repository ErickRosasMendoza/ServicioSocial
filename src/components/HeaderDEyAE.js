import React from 'react';
import logo from '../assets/images/esimelogo.png';
import logo2 from '../assets/images/ipnLogo.png'

class HeaderDEyAE extends React.Component{

    render(){
        return(
            <header id = "header">
			<div><img src={logo} id="logo" alt="esime" /><img src={logo2} id="logo2" alt="politecnico" /></div>
                <div>
                <br/>
                <strong>Escuela Superior de Ingeniería Mecánica y Eléctrica Zacatenco
				Departamento de Extensión y Apoyos Educativos
                </strong>
                </div>	
		    </header>

        );//Fin de Return
    }//Fin de Render
}//Fin de Class ErickComponente

export default HeaderDEyAE;