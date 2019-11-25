import React from 'react';
import Browsing from '../../components/browsing/Browsing';
import LayoutView from '../../components/layoutView/LayoutView';
import CarouselCustom from '../../components/carouselCustom/CarouselCustom';
import Logo from '../../components/logo/Logo';
import Header from '../../components/header/Header';
import './Landing.css';

class Landing extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header />            
                <LayoutView withHeader={true}>
                    <Logo />
                    <div className="text">
                        Find you perfect trip, designed by insiders who know and love their cities
                    </div>
                    <Browsing />
                    <CarouselCustom />
                </LayoutView>
            </React.Fragment>          
        )
    }
}

export default Landing;