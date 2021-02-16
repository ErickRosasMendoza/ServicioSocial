import React from 'react';

class Slider extends React.Component {

    render() {
        return (
            <div id="slider" className= {this.props.size}>
            {this.props.title}
            </div>
        );
    }
}

export default Slider;