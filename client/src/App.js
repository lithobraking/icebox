import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import EntryForm from './components/EntryForm';
import PostView from './components/post-components/PostView'
import LandingPage from './components/LandingPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#39a57e',
    }
  }
})


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path='/NewFeedback'>
            <EntryForm />
          </Route>
          <Route path='/Posts'>
            <PostView />
          </Route>
          <Route exact path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
