import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '20px'
    },
}))

const Post = ({ title, date, body }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={5}>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    {date}
                </Typography>
                <Typography>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post;