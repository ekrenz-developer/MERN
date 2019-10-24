import React from 'react';
import Browsing from '../components/browsing/Browsing';
import Session from '../components/session/Session';
import Layout from '../components/layout/Layout';

class Landing extends React.Component {
    render(){
        return (
            <Layout>
                <Browsing />
                <Session />
            </Layout>          
        )
    }
}

export default Landing;