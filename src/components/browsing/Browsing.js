import React from 'react';
import './Browsing.css';

class Browsing extends React.Component {
    render(){
        return (
            <div className="browsing-container">
                <p>Start Browsing</p>
                <img src={require('../../assets/circled-right-2.png')} className="browsing-img" alt="browsing" />
            </div>
        )
    }
}

export default Browsing; 