import React from 'react';

class Logo extends React.Component {
    render(){
        return (
            <div>
                <img src={require('../assets/MYtineraryLogo.png')} alt="MYtinerary"/>
                <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
            </div>
        )
    }
}

export default Logo;