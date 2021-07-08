import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Collapse, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    form: {
        width: '50%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            // width: '50%',
            // height: '80%',
        },
    },
    title: {
        marginTop: '20px',
        textAlign: 'center'
    },
    formControl: {
        minWidth: 150,
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    },
    commentTextBox: {
        width: '95%',
    },
}));

const EntryForm = () => {
    const classes = useStyles();
    const [organization, setOrganization] = useState('');
    const [feedbackType, setFeedbackType] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [rank, setRank] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [wantsContact, setWantsContact] = useState(false);
    const [body, setBody] = useState('')


    // haha event handlers go brrr
    const handleOrganization = (event) => {
        setOrganization(event.target.value);
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
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailAddress = (event) => {
        setEmailAddress(event.target.value);
    };
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleContactSwitch = (event) => {
        setWantsContact(event.target.checked);
    };
    const handleBody = (event) => {
        setBody(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3001/api/v1/posts', {
            organization: organization,
            feedbackType: feedbackType,
            isAnon: anonymous,
            wantsContact: wantsContact,
            rank: rank,
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            postContent: body,
        })
            .then((response) => {
                console.log(response);
            })
            .catch(
                (error) => {
                    console.log(error);
                }
            )
        return res;
    }


    return (
        <div className={classes.root}>
            <header className={classes.title}>
                <Typography variant='h2'>Post Feedback</Typography>
            </header>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Paper elevation={5}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Grid container spacing={1}>

                            <Grid
                                container
                                justify='space-around'
                                className={classes.grid}
                            >
                                <Grid item>
                                    <FormControl variant='outlined'>
                                        <TextField label='Unit/Organization' variant='outlined' value={organization} onChange={handleOrganization} />
                                    </FormControl>
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
                                            <MenuItem value=''>----</MenuItem>
                                            <MenuItem value='Praise'>Praise</MenuItem>
                                            <MenuItem value='Complaint'>Complaint</MenuItem>
                                            <MenuItem value='Peer review'>Peer Review</MenuItem>
                                            <MenuItem value='Comment'>Comment</MenuItem>
                                            <MenuItem value='Request'>Request</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControlLabel
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
                                                <MenuItem value=''>----</MenuItem>
                                                <MenuItem value='E-1'>E-1</MenuItem>
                                                <MenuItem value='E-2'>E-2</MenuItem>
                                                <MenuItem value='E-3'>E-3</MenuItem>
                                                <MenuItem value='E-4'>E-4</MenuItem>
                                                <MenuItem value='E-5'>E-5</MenuItem>
                                                <MenuItem value='E-6'>E-6</MenuItem>
                                                <MenuItem value='E-7'>E-7</MenuItem>
                                                <MenuItem value='E-8'>E-8</MenuItem>
                                                <MenuItem value='E-9'>E-9</MenuItem>
                                                <MenuItem value=''>----</MenuItem>
                                                <MenuItem value='O-1'>O-1</MenuItem>
                                                <MenuItem value='O-2'>O-2</MenuItem>
                                                <MenuItem value='O-3'>O-3</MenuItem>
                                                <MenuItem value='O-4'>O-4</MenuItem>
                                                <MenuItem value='O-5'>O-5</MenuItem>
                                                <MenuItem value='O-6'>O-6</MenuItem>
                                                <MenuItem value='O-7'>O-7</MenuItem>
                                                <MenuItem value='O-8'>O-8</MenuItem>
                                                <MenuItem value='O-9'>O-9</MenuItem>
                                                <MenuItem value='O-10'>O-10</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Collapse>
                                <Collapse in={!anonymous}>
                                    <Grid item>
                                        <TextField label='First Name' variant='outlined' value={firstName} onChange={handleFirstName} />
                                    </Grid>
                                </Collapse>
                                <Collapse in={!anonymous}>
                                    <Grid item>
                                        <TextField label='Last Name' variant='outlined' value={lastName} onChange={handleLastName} />
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
                                        <TextField label='Email' variant='outlined' value={emailAddress} onChange={handleEmailAddress} />
                                    </Grid>
                                </Collapse>
                                <Collapse in={!anonymous}>
                                    <Grid item>
                                        <TextField label='Phone Number' variant='outlined' value={phoneNumber} onChange={handlePhoneNumber} />
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
                                value={body}
                                onChange={handleBody}
                            />
                        </Grid>
                        <Grid
                            container
                            justify='space-around'
                            className={classes.grid}
                        >
                            <Button type='submit' variant='contained' color='primary' size='large'>Submit</Button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Paper>
            </form>
            <Link to='/'>
                <Button color='primary'>Return to Home</Button>
            </Link>
        </div>
    )
};

export default EntryForm;