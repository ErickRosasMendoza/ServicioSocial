import React from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Home extends React.Component{

    /*state = {
        email: cookies.get('email')

    }
    cerrarSesion(){
        cookies.remove('idUsuario', {path:"/"});
        cookies.remove('email', {path:"/"});
        window.location.href = '/IniciarSesion';
    }

    componentDidMount= () =>{
        if(cookies.get('idUsuario') == null){
            window.location.href = './';
        }
    }

    componentWillMount=()=>{
        if(cookies.get('idUsuario') == null){
            window.location.href = './';
        }

    }*/


   
        render(){
            
            /*console.log("idUsuario:_" + cookies.get('idUsuario'));
            console.log("email:_" + cookies.get('email'));*/  
            return(
                <div className="center">
				<Slider
                    title="Bienvenido"
                    size="slider-small"
                />
            <nav className="buscador">
				<ul>
					<li>
						<Link to='/IniciarSesion' className = "active">Iniciar Sesion</Link>
					</li>
					<li>
						<Link to='/Registrarse' className = "active">Registrarse</Link>
					</li>
				</ul>
			</nav>
            </div>
                /*<React.Fragment>
                <Slider
                    title={this.state.email}

                    size="slider-small"
                />
                <button onClick={this.cerrarSesion}>cerrar sesion</button>
                </React.Fragment>*/
            );

        }

}

export default Home;