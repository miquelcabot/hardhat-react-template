import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/edit' component={Edit}/>
      </Switch>
    </Container>
  )
}

export default App;
