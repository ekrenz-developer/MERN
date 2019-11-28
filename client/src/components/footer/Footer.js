import React from 'react';
import './Footer.css';
import { Link, withRouter } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='left-container'>
          {this.props.location.pathname.split('/').pop() === 'itineraries' && (
            <div onClick={this.props.history.goBack}>
              <ArrowBackIosIcon />
            </div>
          )}
        </div>
        <div className='center-container'>
          <Link to='/'>
            <img
              src={require('../../assets/homeIcon.png')}
              alt='home'
              className='img-container'
            />
          </Link>
        </div>
        <div className='right-container'></div>
      </div>
    );
  }
}

export default withRouter(Footer);
