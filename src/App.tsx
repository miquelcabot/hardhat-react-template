import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DeliveryNew from './pages/DeliveryNew';
import DeliveryShow from './pages/DeliveryShow';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Container>
          <Header />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/deliveries/new' component={DeliveryNew}/>
              <Route exact path='/deliveries/:address' component={DeliveryShow}/>
          </Switch>
        </Container>
    );
  }
}

export default App;
