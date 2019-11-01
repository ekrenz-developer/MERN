import React from 'react';
import './Session.css';

class Session extends React.Component {
    render(){
        return (
            <div className="session-container">
                <p>Want to build your own MYtinerary</p>
                <div className="nav">
                    <a href="#">Log in</a>
                    <a href="#">Create Account</a>
                </div>
            </div>
        )
    }
}

export default Session;