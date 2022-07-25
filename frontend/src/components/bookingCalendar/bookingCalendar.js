import React, {useState} from 'react';
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


const BookingCalendar = () => {

    // SAVE ARRAY OF DATES BETWEEN TWO DATES
    const availableTimeslots = getDates('26 Jul 2022', '29 Aug 2022').map((date) => {
        return {
          id: date,
          startTime: new Date(new Date(new Date(date)).setHours(7, 10, 0, 0)),
          endTime: new Date(new Date(new Date(date)).setHours(17, 0, 0, 0)),
        };
      });
    
      return (
        <div>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor={colors.primary}
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={console.log}
            />
        </div>
      );
}

  export default BookingCalendar;