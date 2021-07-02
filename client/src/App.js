import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import EntryForm from './components/EntryForm';
import PostPage from './components/PostPage';
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
  nav: {
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
          <nav className={classes.nav}>
            <div>
              <Link to='/NewFeedback'>
                <Button variant='contained' color='primary' size='large'>Post Feedback</Button>
              </Link>
            </div>
            <div>
              <Link to='/Posts'>
                <Button variant='contained' color='primary' size='large'>View Posts</Button>
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
            <PostPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
