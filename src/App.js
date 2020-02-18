import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './components/signin';
import SignUp from './components/signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
