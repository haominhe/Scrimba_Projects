import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.isLoading ? <h1>Loading...</h1> : <MainContent />}
        <Footer />
      </div>
    );
  }
}

export default App;
