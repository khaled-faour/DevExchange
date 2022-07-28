import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles';
import colors from '../../assets/styles/colors';
import { useNavigate } from 'react-router-dom';

// Material UI
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const UserCalendar  = ({user})=>{
    const [schedule, setSchedule] = useState([]);
    const classes = styles();
    const navigate = useNavigate();
    
    const navigateToCall = (id)=>{
        navigate(`/videoCall/${id}`);
    }
    const handleDeleteSchedule = (id)=>{
        axios.delete(`/schedules/${id}`).then(res=>{
            console.log(res.data)
            fetchSchedule()
        })
    }

    const fetchSchedule = ()=>{
        axios.get(`/schedules/me`).then(res => {
            console.log(res.data)
            setSchedule(res.data);
        }
        ).catch(err => {
            console.log(err);
        });
    }
    useEffect(()=>{
        fetchSchedule();
    }, [])

    return (
        <div className={classes.container}>
                {schedule.map((schedule, index) => {
                    const startTime = new Date(schedule.start_time)
                    const endTime = new Date(schedule.end_time)
                    return (
                        <div className={classes.innerContainer} key={index}>
                            <div className={classes.availabilityContainer} onClick={()=>navigateToCall(schedule._id)}>
                                <div>
                                    <h3>Days: <span>{startTime.toDateString()}</span></h3>
                                    <h4>Time: <span>{startTime.toLocaleTimeString()} — {endTime.toLocaleTimeString()}</span></h4>
                                </div>
                            </div>
                            <div className={classes.actionButtons}>
                                <RemoveCircleOutlineIcon style={{color: colors.error}} onClick={()=>handleDeleteSchedule(schedule._id)}/>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default UserCalendar;