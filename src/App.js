import EntryForm from './components/EntryForm';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';

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
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <header className="app-header">
          <Typography variant='h3'>ADO Feedback Form</Typography>
        </header>
        <article className={classes.formContainer}>
          <EntryForm />
        </article>
      </div>
    </ThemeProvider>
  );
}

export default App;
