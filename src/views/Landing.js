import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Browsing from '../components/browsing/Browsing';

class Landing extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Browsing />
                <Footer />
            </div>
        )
    }
}

export default Landing;