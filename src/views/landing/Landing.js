import React from 'react';
import Browsing from '../../components/browsing/Browsing';
import Session from '../../components/session/Session';
import Layout from '../../components/layout/Layout';
import './Landing.css';

class Landing extends React.Component {
    render(){
        return (
            <Layout>
                <div className="text">
                    Find you perfect trip, designed by insiders who know and love their cities
                </div>
                <hr/>
                <Browsing />
                <hr/>
                <Session />
            </Layout>          
        )
    }
}

export default Landing;