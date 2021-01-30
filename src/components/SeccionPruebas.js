import React from 'react';
import MiComponente from '../components/MiComponente';


class SeccionPruebas extends React.Component{

    HolaMundo(nombre,edad){
        var presentacion = (
            <div>
                <h2>Hola, soy </h2>
                <h3>tengo  </h3>

            </div>
        );
    }
    //STATE
   
    state = {
        contador: 0
    };
   

    sumar = () =>{
   
        this.setState  ({
            contador: (this.state.contador + 1)
        });
        
    }
    
    restar(){
        this.setState({
            contador: (this.state.contador -1)
        });

    }


    render(){
        return(
            <section id="content">
                <h2 className="subheader">Ultimos artículos</h2>

      
       
       
        <p>
          <code>bienvenido al curso React</code> 
         
        </p>
   
        <h2 className="subheader">Componentes </h2>  

        <MiComponente/>
      
        <h2 className="subheader">States</h2>
        <p>
            {this.state.contador}
        </p>
        <p>
            <input type="button" value="sumar" onClick={this.sumar}/>
            <input type="button" value="restar" onClick={this.restar.bind(this)}/>
        </p>

        </section>

        
         );

    }
}

export default SeccionPruebas;