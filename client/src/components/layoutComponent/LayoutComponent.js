import React from 'react';
import './LayoutComponent.css';
import ScrollArea from 'react-scrollbar';

class LayoutComponent extends React.Component {
    render(){
        return (
            <div className="layoutComponent-container">
                <ScrollArea className="scrollAreaComponent-container">
                    { this.props.children }
                </ScrollArea>
            </div>
        )
    }
}

export default LayoutComponent; 