import React from 'react';
import './LayoutView.css';
import ScrollArea from 'react-scrollbar';

class LayoutView extends React.Component {
    render(){
        return (
            <section className="layoutView-container">
                {this.props.scrollbar &&
                    <ScrollArea className="scrollArea-container">
                        { this.props.children }
                    </ScrollArea>
                }
                {!this.props.scrollbar &&
                    this.props.children
                }
            </section>
        )
    }
}

export default LayoutView; 