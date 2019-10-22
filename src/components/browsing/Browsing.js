import React from 'react';

class Browsing extends React.Component {
    render(){
        return (
            <div>
                <p>Start Browsing</p>
                <img src={require('../../assets/circled-right-2.png')} className="browsing" alt="browsing" />
            </div>
        )
    }
}

export default Browsing;