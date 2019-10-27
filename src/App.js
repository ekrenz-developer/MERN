import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './views/landing/Landing';

class App extends React.Component {
    render(){
        return (
            <div className="app-container container">
                <Header />
                <Landing />
                <Footer />
            </div>
        )
    }
}

export default App;