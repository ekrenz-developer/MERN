import React from 'react';
import './Header.css';


class Header extends React.Component {
    render(){
        return (
            <div>
                <img src={require('../../assets/MYtineraryLogo.png')} className="logo" alt="logo" />
                <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
            </div>
        )
    }
}

export default Header;