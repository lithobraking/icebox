import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplayPosts from "./DisplayPosts";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        marginTop: '20px',
        textAlign: 'center',
    }
}));

const PostView = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant='h2'>Posts</Typography>
                <Typography gutterBottom>View feedback from others here.</Typography>
            </div>
            <div>
            <Link to='/NewFeedback'>
                <Button color='primary'>Post Feedback</Button>
            </Link>
            <Link to='/'>
                <Button color='primary'>Return to Home</Button>
            </Link>
            </div>
            <DisplayPosts />
        </div>
    )
}

export default PostView;