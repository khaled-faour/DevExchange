import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import BookingCalendar from '../bookingCalendar/bookingCalendar';

// Material UI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BookinModal = ({tutor, open, onClose }) => {

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    {tutor.user.first_name} {tutor.user.last_name} available times
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <BookingCalendar tutor={tutor} onClose={onClose}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} outlined rounded>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default BookinModal;