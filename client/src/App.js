import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './views/landing/Landing';
import Login from './views/login/Login';
import Cities from './views/cities/Cities';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//            <div className="app-container container">
import Container from 'react-bootstrap/Container';
import store from './state/store';
import { Provider } from 'react-redux';

class App extends React.Component {
    render(){
        return (
            <Provider store = {store}>
                <Container className="app-container">
                    <Router>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <Landing />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/signup">
                                <Cities />
                            </Route>                        
                        </Switch>
                        <Footer />                   
                    </Router>
                </Container>
            </Provider>
        )
    }
}

export default App;