import React from 'react';
import './CitiesList.css';
import LayoutComponent from '../layoutComponent/LayoutComponent';
import List from '@material-ui/core/List';

class CitiesList extends React.Component {
  render() {
    return (
      <div className='citiesList-container'>
        <LayoutComponent scrollbar={this.props.scrollbar}>
          <List>{this.props.children}</List>
        </LayoutComponent>
      </div>
    );
  }
}

export default CitiesList;
