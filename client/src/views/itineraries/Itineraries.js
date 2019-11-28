import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import City from '../../components/city/City';
import { connect } from 'react-redux';
import { citiesAll } from '../../services/cities/cities';
import { getCities } from '../../state/cities/actions';
import Loading from '../../components/loading/Loading';
import { Button, Collapse } from 'react-bootstrap';

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
        )[0].city
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
            )[0].city
          });
        });
    }
  }

  render() {
    return (
      <LayoutView scrollbar={false}>
        {this.state.loading && <Loading />}
        {!this.state.loading && this.state.city && (
          <React.Fragment>
            <City button={false} city={this.state.city} />
            <Button
              aria-controls='example-collapse-text'
              aria-expanded={this.state.open}
              onClick={() => this.setState({ open: !this.state.open })}
            >
              click
            </Button>
            <Collapse in={this.state.open}>
              <div id='example-collapse-text'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
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
