import React, {Component} from 'react';

class DictamenAdmin extends Component{

    state ={
        

    }//Fin de State
    render(){
        return(
            <React.Fragment>

                <article className="item-lista">
                    <tbody >
                        <tr >
                            <th className="table">Nombre</th>
                            <th className="table">Apellido Paterno</th>
                            <th className="table">Apellido Materno</th>
                            <th className="table">Correo</th>
                        </tr>
                    </tbody>

                    {this.state.clientes.map((cliente, i) =>

                        <tbody key={i}>
                            <tr>
                                <td className="table"> {cliente.idCliente}</td>
                                <td className="table"> {cliente.idCliente}</td>
                            </tr>
                        </tbody>
                    )
                    }
                </article>
            </React.Fragment>
        )
    };

}//Fin de Class DictamenAdmin
export default DictamenAdmin;