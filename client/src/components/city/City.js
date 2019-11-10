import React from 'react';
import './City.css';

class City extends React.Component {
    render(){
        return (
            <div className="city-container">
                <span className="title">{this.props.city}</span>
            </div>
        )
    }
}

export default City; 