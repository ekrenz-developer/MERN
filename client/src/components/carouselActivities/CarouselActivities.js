import React from 'react';
import './CarouselActivities.css';
import Carousel from 'react-bootstrap/Carousel';

class CarouselActivities extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            direction: null
        }
    }
    render(){
        const handleSelect = (selectedIndex, e) => {
            this.setState(
                {
                    index: selectedIndex,
                    direction: e.direction
                }
            );
        };

        return (
            <div className="carousel-container">
                <Carousel
                    activeIndex = {this.state.index}
                    direction = {this.state.direction}
                    onSelect = {handleSelect}
                    className='carousel'
                >
                    {
                        this.props.activities.map((activity, key) => (
                            <Carousel.Item>
                                <div className="item-container" key={key}>
                                    {activity.name}
                                </div>
                            </Carousel.Item> 
                        ))
                    }                                  
                </Carousel>
            </div>
        )
    }
}

export default CarouselActivities;