import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Collapse, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '50%',
            height: '80%',
        },
    },
    formControl: {
        minWidth: 150,
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
    },
    paper: {
        height: 580,
    },
    commentTextBox: {
        width: '90%',
    },
}));

const EntryForm = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(Date.now());
    const [feedbackType, setFeedbackType] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [rank, setRank] = useState('');
    const [wantsContact, setWantsContact] = useState(false);


    // haha event handlers go brrr
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleFeedbackTypeChange = (event) => {
        setFeedbackType(event.target.value);
    };

    const handleAnonSwitch = (event) => {
        setAnonymous(event.target.checked);
    };

    const handleRankSelect = (event) => {
        setRank(event.target.value);
    };

    const handleContactSwitch = (event) => {
        setWantsContact(event.target.checked);
    }


    return (
        <form className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container spacing={1}>

                        <Grid
                            container
                            justify='space-around'
                            className={classes.grid}
                        >
                            <Grid item>
                                <KeyboardDatePicker
                                    className={classes.formControl}
                                    disableToolbar
                                    variant='inline'
                                    format='MM/DD/yyyy'
                                    margin='normal'
                                    label='Date'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                            <Grid item>
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
                            </Grid>
                            <Grid item>
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
                        </Grid>
                        <Grid
                            container
                            justify='space-around'
                            className={classes.grid}
                        >
                            <Collapse in={!anonymous}>
                                <Grid item>
                                    <FormControl variant='outlined' className={classes.formControl}>
                                        <InputLabel id='rank-select-label'>Rank</InputLabel>
                                        <Select
                                            labelId='rank-select-label'
                                            value={rank}
                                            onChange={handleRankSelect}
                                            label='Rank'
                                        >
                                            <MenuItem value=''>
                                                ----
                                            </MenuItem>
                                            <MenuItem value='e1'>E-1</MenuItem>
                                            <MenuItem value='e2'>E-2</MenuItem>
                                            <MenuItem value='e3'>E-3</MenuItem>
                                            <MenuItem value='e4'>E-4</MenuItem>
                                            <MenuItem value='e5'>E-5</MenuItem>
                                            <MenuItem value='e6'>E-6</MenuItem>
                                            <MenuItem value='e7'>E-7</MenuItem>
                                            <MenuItem value='e8'>E-8</MenuItem>
                                            <MenuItem value='e9'>E-9</MenuItem>
                                            <MenuItem value='o1'>O-1</MenuItem>
                                            <MenuItem value='o2'>O-2</MenuItem>
                                            <MenuItem value='o3'>O-3</MenuItem>
                                            <MenuItem value='o4'>O-4</MenuItem>
                                            <MenuItem value='o5'>O-5</MenuItem>
                                            <MenuItem value='o6'>O-6</MenuItem>
                                            <MenuItem value='o7'>O-7</MenuItem>
                                            <MenuItem value='o8'>O-8</MenuItem>
                                            <MenuItem value='o9'>O-9</MenuItem>
                                            <MenuItem value='o10'>O-10</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Collapse>
                            <Collapse in={!anonymous}>
                                <Grid item>
                                    <TextField label='First Name' variant='outlined' />
                                </Grid>
                            </Collapse>
                            <Collapse in={!anonymous}>
                                <Grid item>
                                    <TextField label='Last Name' variant='outlined' />
                                </Grid>
                            </Collapse>
                        </Grid>
                        <Grid
                            container
                            justify='space-around'
                            className={classes.grid}
                        >
                            <Collapse in={!anonymous}>
                                <Grid item>
                                    <TextField label='Email' variant='outlined' />
                                </Grid>
                            </Collapse>
                            <Collapse in={!anonymous}>
                                <Grid item>
                                    <TextField label='Phone Number' variant='outlined' />
                                </Grid>
                            </Collapse>
                        </Grid>
                    </Grid>
                    <Collapse in={!anonymous}>
                        <Grid
                            container
                            justify='space-around'
                            className={classes.grid}
                        >
                            <FormControlLabel
                                className={classes.formControl}
                                control={
                                    <Switch
                                        checked={wantsContact}
                                        onChange={handleContactSwitch}
                                        name='contactMeSwitch'
                                        color='primary'
                                    />
                                }
                                label='I would like to be contacted about my feedback.'
                            />
                        </Grid>
                    </Collapse>
                    <Grid
                        container
                        justify='space-around'
                        className={classes.grid}
                    >
                        <TextField
                            className={classes.commentTextBox}
                            label='Comments'
                            multiline
                            rows={8}
                            placeholder='Enter your feedback here...'
                            variant='outlined'
                        />
                    </Grid>
                    <Grid
                        container
                        justify='space-around'
                        className={classes.grid}
                    >
                        <Button variant='contained' color='primary' size='large'>Submit</Button>
                    </Grid>
                </MuiPickersUtilsProvider>
            </Paper>
        </form>
    )
}

export default EntryForm;