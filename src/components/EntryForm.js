import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, FormControl, Grid, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            minWidth: '500px',
            height: theme.spacing(16),
        },
    }
}));

const EntryForm = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(Date.now());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <form className={classes.root}>
            <Paper elevation={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid
                        container
                        justify='space-around'
                    >
                        <KeyboardDatePicker
                            disableToolbar
                            variant='inline'
                            format='MM/DD/yyyy'
                            margin='normal'
                            label='feedback-date'
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Paper>
        </form>
    )
}

export default EntryForm;