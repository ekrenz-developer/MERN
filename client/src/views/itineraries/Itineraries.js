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

import './Itineraries.css';

class Itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      city: '',
      open: false
    };
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
    /*
action onClick={() => this.setState({ open: !this.state.open })}

          <React.Fragment>
            <City city={this.state.city} />
            <Card>
              <Card.Body>
                Prueba
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                Prueba
              </Card.Body>
            </Card>
            <ListGroup className={'listGroup-container'}>
              <ListGroup.Item>
                Prueba
              </ListGroup.Item>
              <ListGroup.Item className={'listItem-container'} >
                <div clssName="button-container" onClick={() => this.setState({ open: !this.state.open })}>
                  View All
                </div>
                <Collapse in={this.state.open}>
                  <div id='activities'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </div>
                </Collapse>              
              </ListGroup.Item>
            </ListGroup>
          </React.Fragment>
  
    */
  }

  render() {
    return (
      <LayoutView scrollbar={false} withHeader={false}>
        {this.state.loading && <Loading />}
        {!this.state.loading && this.state.city && (
          <React.Fragment>
            <City city={this.state.city.city} />
            <ItinerariesList scrollbar={true}>
              {this.state.city.itineraries && this.state.city.itineraries.length > 0 && (
                this.state.city.itineraries.map((itinerary, key) => (
                  <Itinerary
                    itinerary={itinerary}
                    key={itinerary._id}
                  />
                ))                
              )}
              <Button variant="link" onClick={this.props.history.goBack}>Choose another city...</Button>
            </ItinerariesList>
          </React.Fragment>
        )}
      </LayoutView>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities.citiesList
});

const mapDispatchToProps = dispatch => ({
  getCities: cities => dispatch(getCities(cities))
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
