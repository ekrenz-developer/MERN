import React from 'react';
import './Footer.css';
import { Link , withRouter } from 'react-router-dom';

class Footer extends React.Component {   
    render(){
        return (
            <div className="footer-container">
                {this.props.location.pathname.split('/').pop() === 'itineraries' && (
                    <div onClick={this.props.history.goBack}>
                        Atras
                    </div>
                )}
                <Link to="/">
                    <img src={require('../../assets/homeIcon.png')} alt="home" className="img-container"/>
                </Link>
            </div>
        )
    }
}

export default withRouter(Footer);