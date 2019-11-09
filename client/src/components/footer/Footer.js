import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render(){
        return (
            <div className="footer-container">
                <Link to="/">
                    <img src={require('../../assets/homeIcon.png')} alt="home" className="img-container"/>
                </Link>
            </div>
        )
    }
}

export default Footer;