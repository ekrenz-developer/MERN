import React from 'react';
import './CarouselCustom.css';
import Carousel from 'react-bootstrap/Carousel';

class CarouselCustom extends React.Component {
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
                >
                    <Carousel.Item>
                        <div className="item-container">
                            <div className="image-container">
                                <img src={require('../../assets/amsterdam.jpg')} alt="amsterdam" className="image"/>
                            </div>
                            <div className="image-container">
                                <img src={require('../../assets/paris.jpg')} alt="paris" className="image"/>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="image-container">
                                <img src={require('../../assets/buenos-aires.jpg')} alt="buenos-aires" className="image"/>
                            </div>
                            <div className="image-container">
                                <img src={require('../../assets/cancun.jpg')} alt="cancun" className="image"/>
                            </div>
                        </div>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item-container">
                            <div className="image-container">
                                <img src={require('../../assets/amsterdam.jpg')} alt="amsterdam" className="image"/>
                            </div>
                            <div className="image-container">
                                <img src={require('../../assets/paris.jpg')} alt="paris" className="image"/>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="image-container">
                                <img src={require('../../assets/buenos-aires.jpg')} alt="buenos-aires" className="image"/>
                            </div>
                            <div className="image-container">
                                <img src={require('../../assets/cancun.jpg')} alt="cancun" className="image"/>
                            </div>
                        </div>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item-container">
                            <div className="image-container">
                                <img src={require('../../assets/amsterdam.jpg')} alt="amsterdam" className="image"/>
                            </div>
                            <div className="image-container">
                                <img src={require('../../assets/paris.jpg')} alt="paris" className="image"/>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="image-container">
                                <img src={require('../../assets/buenos-aires.jpg')} alt="buenos-aires" className="image"/>
                            </div>
                            <div className="image-container">
                                <img src={require('../../assets/cancun.jpg')} alt="cancun" className="image"/>
                            </div>
                        </div>                        
                    </Carousel.Item>                                        
                </Carousel>
            </div>
        )
    }
}

export default CarouselCustom;