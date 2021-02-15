import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { PDFReader  } from 'reactjs-pdf-view';
import Global from '../Global';

class PdfServicio extends React.Component {

  url = Global.url;
  state = {
    docServicio: "",
    status: null
  };
    componentWillMount = () => {
        const { match: { params } } = this.props;
        var doc = params.doc;
        this.setState({
                docServicio: doc,
                status: "true"
        })
    }
    render(){
        return(
            <div>
            <PDFReader 
               url ={this.url + "docServicio/getDoc/" + this.state.docServicio}
              showAllPage="true"
            >
            </PDFReader >
          
          </div>
        );
    }
}
export default PdfServicio;