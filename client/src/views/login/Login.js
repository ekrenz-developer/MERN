import React from 'react';
import LayoutView from '../../components/layoutView/LayoutView';
import Header from '../../components/header/Header';

class Login extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header />            
                <LayoutView withHeader={true}>
                    <p>Login</p>
                </LayoutView>
            </React.Fragment>  
        )
    }
}

export default Login;