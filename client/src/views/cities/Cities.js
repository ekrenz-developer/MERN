import React from 'react';
import Layout from '../../components/layout/Layout';
import City from '../../components/city/City';
import Loading from '../../components/loading/Loading';
import { citiesAll } from '../../services/cities/cities';
import { connect } from 'react-redux';
import { getCities } from '../../state/cities/actions';

class Cities extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        fetch(citiesAll)
            .then(
                response => response.json()
            )
            .then(
                data => {
                    this.props.getCities(data)
                    this.setState({loading: false})
                }
            );
    }
    
    render(){
        return (
            <Layout>
                {this.state.loading &&
                    <Loading />
                }
                {!this.state.loading &&
                    this.props.cities.map((city, key) => 
                        <City
                            key = { key }
                            city = { city.city }
                        />
                    )
                }
            </Layout> 
        )
    }
}

const mapStateToProps = state => ({
    cities: state.cities.cities
})

const mapDispatchToProps = dispatch => ({
    getCities: cities => dispatch(getCities(cities))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cities)