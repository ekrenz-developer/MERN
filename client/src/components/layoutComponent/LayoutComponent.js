import React from 'react';
import './LayoutComponent.css';
import ScrollArea from 'react-scrollbar';

class LayoutComponent extends React.Component {
    render(){
        return (
            <div className="layoutComponent-container">
                {this.props.scrollbar &&
                    <ScrollArea className="scrollAreaComponent-container">
                        { this.props.children }
                    </ScrollArea>
                }
                {!this.props.scrollbar &&
                    this.props.children
                }            
            </div>
        )
    }
}

export default LayoutComponent; 