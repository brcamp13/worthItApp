import React, { Component } from 'react';
import firstPage from './components/firstPage';


class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <firstPage />
      </div>
    );
  }
}

export default App;
