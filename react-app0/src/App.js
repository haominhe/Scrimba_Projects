import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
        {/* Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
            like you're making a todo list with some hard-coded items on it */}
        <Footer />
      </div>
    );
  }
}

export default App;
