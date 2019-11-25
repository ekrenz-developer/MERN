import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import CitiesList from '../../components/citiesList/CitiesList';
import City from '../../components/city/City';
import Loading from '../../components/loading/Loading';
import { citiesAll } from '../../services/cities/cities';
import { connect } from 'react-redux';
import { getCities } from '../../state/cities/actions';
import './Cities.css';
import { Link } from 'react-router-dom';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      citiesFilter: ''
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(citiesAll)
      .then(response => response.json())
      .then(data => {
        this.props.getCities(data);
        this.setState({ loading: false });
      });
  }

  handleChange = e => {
    this.setState({
      citiesFilter: e.target.value
    });
  };

  render() {
    return (
      <LayoutView scrollbar={false}>
        {this.state.loading && <Loading />}
        {!this.state.loading && (
          <div className='filter-container'>
            <label htmlFor='filter'>Filter our current cities</label>
            <input
              className='input-container'
              type='text'
              id='filter'
              value={this.state.citiesFilter}
              onChange={this.handleChange}
            />
          </div>
        )}

        {!this.state.loading && (
          <CitiesList>
            {this.props.cities
              .filter(
                city =>
                  city.city
                    .substring(0, this.state.citiesFilter.length)
                    .toLowerCase() === this.state.citiesFilter.toLowerCase()
              )
              .map((city, key) => (
                <Link 
                  to={{
                    pathname: '/cities/' + city._id + '/itineraries'
                  }}
                  key={key}
                >                 
                  <City id={city._id} city={city.city} />
                </Link>
              ))
            }
          </CitiesList>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
