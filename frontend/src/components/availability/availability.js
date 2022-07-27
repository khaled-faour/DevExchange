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
    

    const getTime = (time)=>{
        // convert single digit to time hh:mm am/pm format
        const timeArray = time.split(':');
        const hour = timeArray[0] ?? 0;
        const minute = timeArray[1] ?? 0;
        const ampm = hour >= 12 ? 'pm' : 'am';
        const hour12 = hour % 12;
        return `${hour12}:${minute} ${ampm}`;
    }

    return (
        <div className={classes.container}>
            <div className={classes.addButton}><Button onClick={handleAvailabilityModal} leftIcon={<AddIcon/>} rounded>Add Availability</Button></div>
                {availability.map((availability, index) => {
                    return (
                        <div className={classes.innerContainer} key={index}>
                            <div className={classes.availabilityContainer}>
                                <div>
                                    <h3>Days: <span>{availability.start_date.split('T')[0]} - {availability.end_date.split('T')[0]}</span></h3>
                                    <h4>Time: <span>{getTime(availability.start_time)} {getTime(availability.end_time)}</span></h4>
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
