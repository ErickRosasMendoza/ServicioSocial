import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

class DocDictamen extends React.Component{

    url = Global.url;

    state = {
        docDictamen: "",
        status: null
    };
        componentWillMount = () => {
            const { match: { params } } = this.props;
            var doc = params.doc;
            this.setState({
                    docDictamen: doc,
                    status: "true"
            })
        }
    render() {
        if(this.state.status == "true"){
            return(
                <div>
                        <iframe  src={this.url + "docDictamen/getDoc/" + this.state.docDictamen}></iframe>
                </div>
            );
        }
    }//Fin de Render ()
}//Fin de Classs DocDictamen

export default DocDictamen;