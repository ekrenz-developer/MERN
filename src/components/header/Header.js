import React from 'react';
import './Header.css';
import Link from 'react-router-dom'

class Header extends React.Component {
    render(){
        return (
            <div className="header-container">
                <nav className="nav-container navbar navbar-light fixed-top bg-light">
                    <a className="navbar-brand" href="#">Fixed top</a>
                </nav>
                <hr/>
                <hr/>
                <div className="image-container">
                    <img src={require('../../assets/MYtineraryLogo.png')} className="logo" alt="logo" />
                </div>
            </div>
        )
    }
}

export default Header;