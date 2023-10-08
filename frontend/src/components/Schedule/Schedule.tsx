import React from 'react';
import st from './Schedule.module.scss';
import { DayCard } from './DayCard';
import { centeredData } from 'utils/dateUtils';

interface CalendarProps {
  days?: string[];
}

export const Schedule: React.FC<CalendarProps> = ({ days }) => {
  return (
    <div className={st.calendar}>
      <h3 className={st.title}>Schedule</h3>
      <div className="flex bg-white justify-center rounded-lg mx-auto pt-6">
        {centeredData.map(({ day, date, isToday }, index) => (
          <DayCard key={index} day={day} date={date} isToday={isToday} />
        ))}
      </div>
    </div>
  );
};
