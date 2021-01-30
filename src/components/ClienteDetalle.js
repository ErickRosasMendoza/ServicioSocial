import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import axios from 'axios';
class ClienteDetalle extends React.Component{

    state = {
      
        file:[],
        idCliente: "",
        cliente:[]
        
        
       

    };

    
    

        componentWillMount() {
            //this.getImage();
            const { match: { params } } = this.props;
            console.log(params.id)
           var id = params.id;
            
            this.setState({
                idCliente: id,
               
                
            })
           
          
        }

        componentDidMount(){
            console.log(this.state.idCliente);
            this.getCliente();
        }

        

        getCliente = () => {

            
    
            axios.get("http://localhost:8080/cliente/find/"+this.state.idCliente )
            .then(response => {
                
               this.setState({
                cliente: response.data,
               });

               
               // fd.prependData ('file', this.file.data, 'luis')

                  // fd.append('file', this.state.file, response.file.name)

                
               console.log(this.state.cliente.nombre);
             } );
        
    }

    


   
    render() {
    
        
    
        return(
            <React.Fragment> 
                hola foto de alumno
                <article className="article-item">
                  <div className="image-wrap">
                   < img src = {"http://localhost:8080/file/getFile/"+ this.state.idCliente }></img>
                   </div>
                   <div>
                       
                       {this.state.idCliente}
                        {this.state.cliente.nombre}
                   </div>
                   </article>

                   
            

              
                            
                          
                     

            </React.Fragment>


        );
    }
    


}

export default ClienteDetalle;