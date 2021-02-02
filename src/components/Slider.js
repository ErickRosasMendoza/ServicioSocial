import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Slider extends React.Component {

    render() {
       

        return (
            <div id="slider" className= {this.props.size}>
                <h1>{this.props.title}</h1>
               <a id="menu"> <Link to='/Error' >crear cuenta</Link>
               </a>
                {this.props.btn &&

                    <a href="/blog" className="btn-white">{this.props.btn}</a>

                }
                <a></a>
                
            </div>

        );
    }
}

export default Slider;