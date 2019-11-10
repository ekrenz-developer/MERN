import React from 'react';
import './Loading.css';
import Spinner from 'react-bootstrap/Spinner';

class Loading extends React.Component {
    render(){
        return (
            <div className="loading-container">
                <Spinner animation="border"></Spinner>
            </div>
        )
    }
}

export default Loading; 