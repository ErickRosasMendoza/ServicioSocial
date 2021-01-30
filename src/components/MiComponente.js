import React from 'react';


class MiComponente extends React.Component{

   render(){
        let receta ={
            nombre: 'pizza',
            ingredientes: ['tomate', 'masa','queso'],
            precio: 200
        }

        return(
           <div className= 'mi_componente'>

                <h1>{'Comida:  ' + receta.nombre}</h1>
                <h2>{'Precio: ' + receta.precio + "  pesos"}</h2>
                <h3>ingredientes</h3>
                {this.props.saludo &&
                    <h3>{this.props.saludo}</h3> 
                }
           
           <ol>
           {
               receta.ingredientes.map((ingrediente,index)=>{
                    //console.log(ingrediente);
                    return(
                        <li key={index}>
                            {ingrediente}
                         </li>
                    );
               })
           
           }
           </ol>
           </div>
        );
    }

}

export default MiComponente;

