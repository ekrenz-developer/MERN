import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import { connect } from 'react-redux';
import './Itineraries.css';

class Itineraries extends React.Component {
  render() {
    return <LayoutView scrollbar={false}></LayoutView>;
  }
}

const mapStateToProps = state => ({
  cities: state.cities.citiesList
});

export default connect(mapStateToProps, null)(Itineraries);
