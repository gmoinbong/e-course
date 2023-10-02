import React from 'react';

interface DayCardProps {
  day: string;
  date: number;
  isToday: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({ day, date, isToday}) => (
  <div className={`flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	cursor-pointer justify-center w-16 ${isToday ? 'bg-purple-300 shadow-lg' : ''} `}>
    <div className="flex items-center px-2 py-2">
      <div className="text-center">
        <p className={`text-${isToday ? 'purple' : 'gray'}-900 group-hover:text-purple-900 text-sm transition-all	duration-300`}>{day}</p>
        <p className={`text-${isToday ? 'purple' : 'gray'}-900 group-hover:text-purple-900 mt-3 ${isToday ? 'font-bold' : 'group-hover:font-bold'} transition-all	duration-300`}>{date}</p>
      </div>
    </div>
  </div>
);
