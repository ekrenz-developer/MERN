import React from 'react';
import './CitiesList.css';
import LayoutComponent from '../layoutComponent/LayoutComponent';

class CitiesList extends React.Component {
    render(){
        return (
            <div className="citiesList-container">
                <LayoutComponent>
                    {
                        this.props.children
                    }
                </LayoutComponent>
            </div>
        )
    }
}

export default CitiesList; 