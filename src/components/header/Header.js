import React from 'react';
import './Header.css';

/*
<p>Find your perfect trip, designed by insiders who know and love their cities.</p>
*/

class Header extends React.Component {
    render(){
        return (
            <div className="header-container">
                <div className="image-container">
                    <img src={require('../../assets/MYtineraryLogo.png')} className="logo" alt="logo" />
                </div>
            </div>
        )
    }
}

export default Header;