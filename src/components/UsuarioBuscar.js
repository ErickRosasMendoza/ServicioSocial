import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UsuarioBuscar extends React.Component {

    state = {
        usuarioBuscar: [],
        status: null
    };

    componentWillMount() {
        this.getUsuariosBuscar();
    }

    getUsuarioBuscar = () => {

        axios.get("http://localhost:8080/usuario/findAll")
            .then(response => {
                this.setState({
                    usuarioBuscar: response.data,
                    status: "true"
                });
                console.log(this.state.usuarioBuscar);
            });
    }

    render() {
        return (
            <React.Fragment>
                <article className="item-lista">
                    <tbody >
                        <tr >
                            <th className="table">Correo</th>
                        </tr>
                    </tbody>

                    {this.state.map((usuarioBuscar, i) =>

                        <tbody key={i}>
                            <tr>
                                <td className="table"> {usuarioBuscar.email}</td>
                            </tr>
                        </tbody>
                    )

                    }
                </article>
            </React.Fragment>
        );
    }
}

export default UsuarioBuscar;