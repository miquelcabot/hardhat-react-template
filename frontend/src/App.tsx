import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Edit from './pages/Edit';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/edit' component={Edit}/>
      </Switch>
    </>
  )
}

export default App;
