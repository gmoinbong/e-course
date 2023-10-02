import { DAYS } from "@components/Schedule/constant";

export type DateInfo = {
    day: string;
    date: number;
    isToday: boolean;
};
const currentDate = new Date();
export const getWeekDates = (currentDate: Date) => {
    const daysOffset = 3;  
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - daysOffset);

    return Array.from({ length: 7 }, (_, i) => {
        const dayDate = new Date(startOfWeek);
        dayDate.setDate(startOfWeek.getDate() + i);

        return {
            day: DAYS[dayDate.getDay()],
            date: dayDate.getDate(),
            isToday: dayDate.getDate() === currentDate.getDate() && dayDate.getMonth() === currentDate.getMonth(),
        };
    });
};



export const centeredData = getWeekDates(currentDate);

