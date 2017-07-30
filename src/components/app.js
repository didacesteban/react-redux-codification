import React, { Component } from 'react';
import InputTextToCodify from '../containers/input-text-to-codify';

class App extends Component {
  render() {
    return (
      <div>
          <h2>Type text to code</h2>
          <InputTextToCodify />
      </div>
    );
  }
}

export default App;
