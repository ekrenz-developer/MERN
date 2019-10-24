import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <div className="footer-container">
                <img src={require('../../assets/homeIcon.png')} alt="home" className="img-container"/>
            </div>
        )
    }
}

export default Footer;