import React from 'react';
import './Filter.css';

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            citiesFilter: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState(
            {
                citiesFilter: e.target.value
            }
        )
    }

    render(){
        return (
            <div className = "filter-container">
                <label htmlFor="filter">Filter our current cities</label>
                <input className="input-container" type="text" id="filter" value={this.state.citiesFilter} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Filter;