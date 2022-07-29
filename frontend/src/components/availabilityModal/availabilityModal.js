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
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const AvailabilityModal = ({ open, onClose, onSubmit, onChange }) => {
    const [durations, setDurations] = useState(['']);

    const handleDurationsChange = (e, index) => {
        let temp = [...durations];
        temp[index] = e.target.value;
        setDurations(temp)
    }

    const handleAddDuration = () => {
        setDurations([...durations, ''])
    }

    const handleRemoveDuration = (index) => {
        let temp = [...durations];
        temp.splice(index, 1);
        setDurations(temp)
    }

    useEffect(() => {
        let e={target:{value:durations, name:'durations'}};
        onChange(e)
    }
    , [durations])

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
                            {/* <Grid item xs={12}>
                                Durations (mins): 
                                <Grid container direction="column" alignItems='flex-start' spacing={2} wrap='nowrap'>
                                    {durations.map((duration, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                                <Input value={duration} name={`duration_${index}`} onChange={(e)=>handleDurationsChange(e, index)}/>
                                                <RemoveCircleOutlineIcon onClick={()=>handleRemoveDuration(index)}/>
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button onClick={handleAddDuration}>Add duration</Button>
                            </Grid> */}
                            
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