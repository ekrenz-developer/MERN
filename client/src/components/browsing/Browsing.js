import React from 'react';
import './Browsing.css';

class Browsing extends React.Component {
    render(){
        return (
            <div className="browsing-container">
                <h5>Start Browsing</h5>
                <img src={require('../../assets/circled-right-2.png')} className="browsing-img" alt="browsing" />
            </div>
        )
    }
}

export default Browsing; 