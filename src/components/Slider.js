import React from 'react';

class Slider extends React.Component {

    render() {
        return (
            <div id="slider" className= {this.props.size}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Slider;