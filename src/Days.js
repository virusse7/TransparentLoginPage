import { DaysElement } from "./styled";

export const CalendarDays = () => {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const daysElement = days.map((day, index) => (
        <DaysElement key={index}>{day}</DaysElement>
    ));

    return (
        <div>
            {daysElement}
        </div>
    );
};