import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { PDFReader  } from 'reactjs-pdf-view';
import Global from '../Global';

class PdfBaja extends React.Component {

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
    render(){
        return(
            <div>
            <PDFReader 
               url ={this.url + "docBaja/getDoc/" + this.state.docBaja}
              showAllPage="true"
            >
            </PDFReader >
          
          </div>
        );
    }
}
export default PdfBaja;