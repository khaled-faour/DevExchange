import React from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import colors from '../../assets/styles/colors';
import './styles.css';

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


const BookingCalendar = ({tutor}) => {

    // SAVE ARRAY OF DATES BETWEEN TWO DATES
    const availableTimeslots = tutor?.availability?.map(availability=>{
      return getDates(availability.start_date, availability.end_date).map((date) => {
           const value = {
            id: date,
            startTime: new Date(new Date(new Date(date)).setHours(availability.start_time.split(":")[0], 0, 0, 0)),
            endTime: new Date(new Date(new Date(date)).setHours(availability.end_time.split(":")[0], 0, 0, 0)),
          }
           return value;
        })
    })
      
      return (
        <div>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor={colors.primary}
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots.flat()}
                onStartTimeSelect={console.log}
            />
        </div>
      );
}

  export default BookingCalendar;