import React, { useState, useEffect } from 'react';
import styles from './styles';
import axios from 'axios';
import Button from '../button/button';
import AvailabilityModal from '../availabilityModal/availabilityModal';
import colors from '../../assets/styles/colors';

// Material UI
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Availability = ({user, fetchUser}) => {
    const availability = user?.tutor_details.availability || [];
    const classes = styles();
    const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
    const [newAvailability, setNewAvailability] = useState({
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: ''
    });


    const handleAvailabilityModal = (e) => {
        setAvailabilityModalOpen(!availabilityModalOpen);
    }
    
    const handleNewAvailabilitySubmit = ()=>{
        axios.post('/tutorDetails/availability', {newAvailability})
        .then(res => {
            console.log(res.data);
            handleAvailabilityModal()
            fetchUser()
        });
    }
    const handleNewAvailabilityChange = (e) => {
        setNewAvailability({
            ...newAvailability,
            [e.target.name]: e.target.value
        });
    }

    const handleDeleteAvailability = (id)=>{
        axios.delete(`/tutorDetails/availability/`, {data: {id}})
        .then(res=>{
            console.log(res.data);
            fetchUser()
        })
    }
    

    return (
        <div className={classes.container}>
            <div className={classes.addButton}><Button onClick={handleAvailabilityModal} leftIcon={<AddIcon/>} rounded>Add Availability</Button></div>
                {availability.map((availability, index) => {
                    const startTime = new Date(availability.start_time)
                    const endTime = new Date(availability.end_time)
                    return (
                        <div className={classes.innerContainer} key={index}>
                            <div className={classes.availabilityContainer}>
                                <div>
                                    <h3>Days: <span>{startTime.toDateString()} — {endTime.toDateString()}</span></h3>
                                    <h4>Time: <span>{startTime.toLocaleTimeString()} — {endTime.toLocaleTimeString()}</span></h4>
                                    <h4>Durations: <span>{availability?.durations?.join(', ')}</span></h4>
                                </div>
                            </div>
                            <div className={classes.actionButtons}>
                                <RemoveCircleOutlineIcon style={{color: colors.error}} onClick={()=>handleDeleteAvailability(availability._id)}/>
                            </div>
                        </div>
                    )
                })}
            <AvailabilityModal open={availabilityModalOpen} onClose={handleAvailabilityModal} onSubmit={handleNewAvailabilitySubmit} onChange={handleNewAvailabilityChange}/>
        </div>
    )
}

export default Availability;
