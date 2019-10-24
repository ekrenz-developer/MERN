import React from 'react';
import './Layout.css';

class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="layout-container">
                { this.props.children }
            </section>
        )
    }
}

export default Layout; 