import React, { useEffect } from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import colors from '../../assets/styles/colors';
import './styles.css';
import axios from 'axios';


Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function getDates(start, end) {
  const startDate = new Date(start)
  const stopDate = new Date(end)
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
      dateArray.push(new Date (currentDate));
      currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

const BookingCalendar = ({tutor, onClose}) => {

      const availableTimeslots = tutor.availability.map(availability=>{
        console.log("Availability:: ", availability)
        return getDates(availability.start_time, availability.end_time).map(date=>{
          const start_hour = (new Date(availability.start_time)).toTimeString().split(':')
          const end_hour = (new Date(availability.end_time)).toTimeString().split(':')
          return {
            id: availability._id,
            startTime: new Date(new Date(new Date(date)).setHours(start_hour[0], 0, 0, 0)),
            endTime: new Date(new Date(new Date(date)).setHours(end_hour[0], 0, 0, 0)),
          }
        })
      })
      
    const handleConfirmation = (time) => {
        axios.post('/users/book', {time, tutor:{_id: tutor._id, hourly_rate: tutor.hourly_rate}})
        .then(res => {
            onClose()            
        }).catch(err => {
            console.log(err);
        });
    }
      
      return (
        <div>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor={colors.primary}
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots.flat()}
                onStartTimeSelect={handleConfirmation}
            />
        </div>
      );
}

  export default BookingCalendar;