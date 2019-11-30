import React from 'react';
import './ItinerariesList.css';
import LayoutComponent from '../layoutComponent/LayoutComponent';

class ItinerariesList extends React.Component {
render() {
    return (
      <div className='itinerariesList-container'>
        <LayoutComponent scrollbar={this.props.scrollbar}>
          {
            this.props.children
          }
        </LayoutComponent>
      </div>
    );
  }
}

export default ItinerariesList;