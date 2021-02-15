import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

class DocLiberacion extends React.Component{

    url = Global.url;

    state = {
        docLiberacion: "",
        status: null
    };
        componentWillMount = () => {
            const { match: { params } } = this.props;
            var doc = params.doc;
            this.setState({
                    docLiberacion: doc,
                    status: "true"
            })
        }
    render() {
        if(this.state.status == "true"){
            return(
                <div>
                        <iframe  src={this.url + "docLiberacion/getDoc/" + this.state.docLiberacion}></iframe>
                </div>
            );
        }
    }//Fin de Render ()
}//Fin de Classs DocLiberacion

export default DocLiberacion;