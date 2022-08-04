import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import Input from '../input/input';

// Material UI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

const AvailabilityModal = ({ open, onClose, onSubmit, onChange }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                
            >
                <DialogTitle id="alert-dialog-title">
                    Add Available Times
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Input type="date" name="start_date" label="Start date" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Input type="date" name="end_date" label="End date" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Input type="time" name="start_time" label="Start time" onChange={onChange}/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Input type="time" name="end_time" label="End time" onChange={onChange}/>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} outlined rounded>Cancel</Button>
                    <Button onClick={onSubmit} rounded>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AvailabilityModal;