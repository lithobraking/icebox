import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '55%',
            height: theme.spacing(16),
        },
    },
    formControl: {
        minWidth: 150,
    },
}));

const EntryForm = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(Date.now());
    const [feedbackType, setFeedbackType] = useState('');
    const [anonymous, setAnonymous] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleFeedbackTypeChange = (type) => {
        setFeedbackType(type.target.value);
    };

    const handleAnonSwitch = (event) => {
        setAnonymous(event.target.checked);
    };


    return (
        <form className={classes.root}>
            <Paper elevation={3}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid
                        container
                        justify='space-around'
                    >
                        <KeyboardDatePicker
                            className={classes.formControl}
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
                        <FormControl variant='outlined' className={classes.formControl}>
                            <InputLabel id='type-select-label'>Feedback Type</InputLabel>
                            <Select
                                labelId='type-select-label'
                                value={feedbackType}
                                onChange={handleFeedbackTypeChange}
                                label='Feedback Type'
                            >
                                <MenuItem value=''>
                                    ----
                                    </MenuItem>
                                <MenuItem value='praise'>Praise</MenuItem>
                                <MenuItem value='complaint'>Complaint</MenuItem>
                                <MenuItem value='peer review'>Peer Review</MenuItem>
                                <MenuItem value='comment'>Comment</MenuItem>
                                <MenuItem value='request'>Request</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            className={classes.formControl}
                            control={
                                <Switch
                                    checked={anonymous}
                                    onChange={handleAnonSwitch}
                                    name='anonymousCheckbox'
                                    color='primary'
                                />
                            }
                            label='Submit Anonymously?'
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Paper>
        </form>
    )
}

export default EntryForm;