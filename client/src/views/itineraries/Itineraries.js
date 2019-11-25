import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import City from '../../components/city/City';
import { connect } from 'react-redux';
import { citiesAll } from '../../services/cities/cities';
import { getCities } from '../../state/cities/actions';
import Loading from '../../components/loading/Loading';
import './Itineraries.css';

class Itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      city: ''
    };
  }

  componentDidMount() {
    if(this.props.cities.length > 0){
      this.setState(
        { 
          city: this.props.cities
                  .filter(
                    city => city._id === this.props.match.params.city
                  )[0].city
        }
      );
    }else{
      this.setState({ loading: true });
      fetch(citiesAll)
        .then(response => response.json())
        .then(data => {
          this.props.getCities(data);
          this.setState({ loading: false });
          this.setState(
            { 
              city: this.props.cities
                      .filter(
                        city => city._id === this.props.match.params.city
                      )[0].city
            }
          );
        });
    }
  }

  render() {
    return (
      <LayoutView scrollbar={false}>
        {this.state.loading && <Loading />}
        {!this.state.loading && this.state.city && (
          <City button={false} city={this.state.city} />
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
