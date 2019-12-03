import React from 'react';
import './LayoutView.css';
import ScrollArea from 'react-scrollbar';

class LayoutView extends React.Component {
    render(){
        return (
            <section 
                className={this.props.withHeader ? 'layoutViewWithHeader-container' : 'layoutView-container'}
            >
                {this.props.scrollbar &&
                    <ScrollArea className="scrollArea-container">
                        <div className='view-container'>
                            {this.props.children}
                        </div>
                    </ScrollArea>
                }
                {!this.props.scrollbar &&
                    <div className='view-container'>
                        {this.props.children}
                    </div>
                }
            </section>
        )
    }
}

export default LayoutView; 