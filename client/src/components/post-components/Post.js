import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '20px'
    },
    date: {
        fontSize: '12px'
    }
}))

const Post = ({ title, date, body }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={5}>
            <CardContent>
                <Typography variant={'h4'}>
                    <b>{title}</b>
                </Typography>
                <Typography className={classes.date} gutterBottom>
                    {date}
                </Typography>
                <Typography variant={'body1'}>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post;