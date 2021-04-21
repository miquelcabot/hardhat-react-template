import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Box>
          <Typography variant="body1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/edit" component={Edit} />
            </Switch>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default App;
