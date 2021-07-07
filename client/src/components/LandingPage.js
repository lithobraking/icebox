import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        marginTop: '20px',
        marginBottom: '100px'
    },
    subtitle: {

    },
    welcome: {
        width: '40vw',
        marginBottom: '20px',
    },
    button: {
        display: 'inline-block',
        margin: '10px'
    }

}));

const LandingPage = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.title}>
                    <Typography variant='h1'>ICEBOX</Typography>
                    <Typography variant='h5'>Unit Feedback Utility</Typography>
                </div>
                <div className={classes.welcome}>
                    <Typography>
                        Do you think there's something your unit could be doing better? Or maybe you want to praise your unit for doing a good job? <br />
                        Whatever your feedback may be, this is to place to provide it.<br />
                        You can post anonymously, or provide a way for someone to reach out to you if you choose.
                        <br /><br />
                        Organizations are stronger when everyone has a voice, so add yours here!
                    </Typography>
                </div>
                <div>
                    <Link to='/NewFeedback'>
                        <Button className={classes.button} variant='contained' color='primary'>Post Feedback</Button>
                    </Link>
                    <Link to='/Posts'>
                        <Button className={classes.button} variant='contained' color='primary'>View Posts</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage;