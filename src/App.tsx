import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DeliveryNew from './pages/DeliveryNew';
import DeliveryShow from './pages/DeliveryShow';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/deliveries/new' component={DeliveryNew}/>
              <Route exact path='/deliveries/:address' component={DeliveryShow}/>
          </Switch>
        </div>
    );
  }
}

export default App;
