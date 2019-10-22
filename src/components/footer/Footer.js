import React from 'react';

class Logo extends React.Component {
    render(){
        return (
            <div>
                <img src={require('../assets/MYtineraryLogo.png')} alt=""/>
            </div>
        )
    }
}

export default Logo;