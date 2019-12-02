import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import City from '../../components/city/City';
import { connect } from 'react-redux';
import { citiesAll } from '../../services/cities/cities';
import { getCities } from '../../state/cities/actions';
import Loading from '../../components/loading/Loading';
import ItinerariesList from '../../components/itinerariesList/ItinerariesList';
import Itinerary from '../../components/itinerary/Itinerary';
import { Button } from 'react-bootstrap';
import { openItinerary , closeItinerary , initItinerary } from '../../state/itineraries/actions';

import './Itineraries.css';

class Itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      city: ''
    };
  }

  onClick = (itinerary) => {
    return (
      !this.props.itineraries.open ?
        this.props.openItinerary(itinerary)
      :
        this.props.closeItinerary(null)
    )
  }

  componentDidMount() {
    if (this.props.cities.length > 0) {
      this.setState({
        city: this.props.cities.filter(
          city => city._id === this.props.match.params.city
        )[0]
      });
    } else {
      this.setState({ loading: true });
      fetch(citiesAll)
        .then(response => response.json())
        .then(data => {
          this.props.getCities(data);
          this.setState({ loading: false });
          this.setState({
            city: this.props.cities.filter(
              city => city._id === this.props.match.params.city
            )[0]
          });
        });
    }
    this.props.initItinerary(null);
  }

  render() {
    return (
      <LayoutView scrollbar={false} withHeader={false}>
        {this.state.loading && <Loading />}
        {!this.state.loading && this.state.city && (
          <React.Fragment>
            <City city={this.state.city.city} />
            {!this.props.itineraries.open && (
              <ItinerariesList scrollbar={true}>
                {this.state.city.itineraries && this.state.city.itineraries.length > 0 && (
                  this.state.city.itineraries.map((itinerary, key) => (
                    <Itinerary
                      itinerary={itinerary}
                      key={itinerary._id}
                      onClick={() => this.onClick(itinerary)}
                    />
                  ))                
                )}
                <Button variant="link" onClick={this.props.history.goBack}>Choose another city...</Button>
              </ItinerariesList>
            )}
            {this.props.itineraries.open && (
              <ItinerariesList scrollbar={false}>
                <Itinerary
                  itinerary={this.props.itineraries.open}
                  key={this.props.itineraries.open._id}
                  onClick={() => this.onClick(this.props.itineraries.open)}
                />
                <Button variant="link" onClick={this.props.history.goBack}>Choose another city...</Button>
              </ItinerariesList>           
            )}
          </React.Fragment>
        )}
      </LayoutView>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities.citiesList,
  itineraries: state.itineraries
});

const mapDispatchToProps = dispatch => ({
  getCities: cities => dispatch(getCities(cities)),
	openItinerary: itinerary => dispatch(openItinerary(itinerary)),
  closeItinerary: itinerary => dispatch(closeItinerary(itinerary)),
  initItinerary: itinerary => dispatch(initItinerary(itinerary))
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
