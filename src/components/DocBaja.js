import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

class DocBaja extends React.Component{

    url = Global.url;

    state = {
        docBaja: "",
        status: null
    };
        componentWillMount = () => {
            const { match: { params } } = this.props;
            var doc = params.doc;
            this.setState({
                    docBaja: doc,
                    status: "true"
            })
        }
    render() {
        if(this.state.status == "true"){
            return(
                <div>
                        <iframe  src={this.url + "docBaja/getDoc/" + this.state.docBaja}></iframe>
                </div>
            );
        }
    }//Fin de Render ()
}//Fin de Classs DocBaja

export default DocBaja;