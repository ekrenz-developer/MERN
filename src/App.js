import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './views/landing/Landing';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
    render(){
        return (
            <div className="app-container container">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                    </Switch>                    
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;