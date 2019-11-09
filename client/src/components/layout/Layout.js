import React from 'react';
import './Layout.css';
import ScrollArea from 'react-scrollbar';

class Layout extends React.Component {
    render(){
        return (
            <section className="layout-container">
                <ScrollArea className="scrollArea-container">
                    { this.props.children }
                </ScrollArea>
            </section>
        )
    }
}

export default Layout; 