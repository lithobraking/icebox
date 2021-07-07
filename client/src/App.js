import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import EntryForm from './components/EntryForm';
import DisplayPosts from './components/DisplayPosts';
import LandingPage from './components/LandingPage';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography, Button } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#39a57e',
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    display: 'inline-block',
    margin: 5
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <nav>
            <div>
            <Link to='/'>
                <Button className={classes.button} variant='contained' color='primary'>Home</Button>
              </Link>
              <Link to='/NewFeedback'>
                <Button className={classes.button} variant='contained' color='primary'>Post Feedback</Button>
              </Link>
              <Link to='/Posts'>
                <Button className={classes.button} variant='contained' color='primary'>View Posts</Button>
              </Link>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path='/NewFeedback'>
            <div className={classes.root}>
              <header className="app-header">
                <Typography variant='h3'>Post Feedback</Typography>
              </header>
              <article className={classes.formContainer}>
                <EntryForm />
              </article>
            </div>
          </Route>
          <Route path='/Posts'>
            <DisplayPosts />
          </Route>
          <Route path='/'>
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
