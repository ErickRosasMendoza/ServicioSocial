import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { PDFReader  } from 'reactjs-pdf-view';
import Global from '../Global';

class PdfLiberacion extends React.Component {

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
    render(){
        return(
            <div>
            <PDFReader 
               url ={this.url + "docLiberacion/getDoc/" + this.state.docLiberacion}
              showAllPage="true"
            >
            </PDFReader >
          
          </div>
        );
    }
}
export default PdfLiberacion;