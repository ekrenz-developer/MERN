import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './views/Landing';

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <Header />
                <Landing />
                <Footer />
            </div>
        )
    }
}

export default App;