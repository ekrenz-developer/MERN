import React from 'react';
import './Header.css';

/*
<p>Find your perfect trip, designed by insiders who know and love their cities.</p>
*/

class Header extends React.Component {
    render(){
        return (
            <div>
                <img src={require('../../assets/MYtineraryLogo.png')} className="logo" alt="logo" />
            </div>
        )
    }
}

export default Header;