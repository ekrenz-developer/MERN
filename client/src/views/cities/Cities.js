import React from 'react';
import Layout from '../../components/layout/Layout';
import City from '../../components/city/City';
import { citiesAll } from '../../services/cities/cities';

class Cities extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            cities: []
        }
    }

    componentDidMount(){
        fetch(citiesAll)
            .then(
                response => response.json()
            )
            .then(
                data => this.setState({cities: data})
            );
        
    }
    
    render(){
        return (
            <Layout>
                {
                    this.state.cities.map((city, id) => 
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