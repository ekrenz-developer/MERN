import React from 'react';
import Footer from './components/footer/Footer';
import Landing from './views/landing/Landing';
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import Cities from './views/cities/Cities';
import Itineraries from './views/itineraries/Itineraries';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//            <div className="app-container container">

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/cities'>
              <Cities />
            </Route>
            <Route exact path='/cities/:city/itineraries' component={Itineraries} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
