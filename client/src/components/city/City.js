import React from 'react';
import './City.css';
import ListItem from '@material-ui/core/ListItem';

class City extends React.Component {
  render() {
    return (
      <div className='city-container'>
        {!this.props.button && (
            <span className='title'>{this.props.city}</span>
        )}
        {this.props.button && (
          <ListItem button className='listItem-container'>
            <span className='title'>{this.props.city}</span>
          </ListItem>
        )}
      </div>
    );
  }
}

export default City;
