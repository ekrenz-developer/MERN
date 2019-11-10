import React from 'react';
import Layout from '../../components/layout/Layout';
import City from '../../components/city/City';
import Loading from '../../components/loading/Loading';
import { citiesAll } from '../../services/cities/cities';

class Cities extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            cities: [],
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
                    this.setState({cities: data})
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
                    this.state.cities.map(city => 
                        <City
                            city = { city.city }
                        />
                    )
                }
            </Layout>          
        )
    }
}

export default Cities;