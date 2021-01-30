import React from 'react';
import logo from '../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{

    render(){

        return(
            <header id = "header">
		
			<div className="center">
			{/*logo*/}
			<div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
				<span id="brand">
					<br/>
					<strong>Curso </strong>React
				</span>
			</div>
			{/*menu*/}
			<nav id="menu">
				<ul>
					<li>
						<NavLink to="/home" activeClassName = "active">inicio</NavLink>
				
					</li>
				
					<li>
						<NavLink to="/formulario"  activeClassName = "active" className="btn-menu">formulario</NavLink>
				
					</li>
					<li>
						<NavLink to="/peliculas?" activeClassName = "active">peliculas</NavLink>
				
					</li>
					<li>
						<NavLink to="sin-componente" activeClassName = "active">pagina 2</NavLink>
				
					</li>



				</ul>
			</nav>
			{/*limpiar los flotados*/}
			<div className="clearfix"/>
			</div>
		</header>

        );
    }
}

export default Header;