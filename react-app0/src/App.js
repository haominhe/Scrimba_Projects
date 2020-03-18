import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
