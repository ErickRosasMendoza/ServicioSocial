import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Clientes extends React.Component {

    state = {
        clientes: [],
        status: null
    };


    componentWillMount() {
        this.getClientes();
    }

    getClientes = () => {

       

        axios.get("http://localhost:8080/cliente/findAll")
            .then(response => {
                this.setState({
                    clientes: response.data,
                    status: "true"
                });
                console.log(this.state.clientes);
            });
    }

    render() {



        return (
            <React.Fragment>

                <article className="item-lista">
                    <tbody >
                        <tr >
                            <th className="table" >  Id </th>
                            <th className="table">Nombre </th>
                        </tr>
                    </tbody>

                    {this.state.clientes.map((cliente, i) =>

                        <tbody key={i}>
                            <tr>
                                <td className="table"> {cliente.idCliente}</td>
                              
                               <td className="table"> <Link to={'/blog/clienteDetalle/' + cliente.idCliente} 
                               >   {cliente.nombre} </Link></td>
                            </tr>
                        </tbody>
                    )

                    }



                </article>
            </React.Fragment>
        );
    }
}

export default Clientes;