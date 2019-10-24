import React from 'react';
import Browsing from '../components/browsing/Browsing';
import Session from '../components/session/Session';

class Landing extends React.Component {
    render(){
        return (
            <section>
                <Browsing />
                <Session />
            </section>           
        )
    }
}

export default Landing;