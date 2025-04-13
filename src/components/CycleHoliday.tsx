import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        { name: "Christmas", year: 2023 },
        { name: "Easter", year: 2023 },
        { name: "Halloween", year: 2023 },
        { name: "New Year", year: 2024 },
        { name: "Thanksgiving", year: 2023 },
    ];

    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    const cycleAlphabetically = () => {
        const sortedHolidays = [...holidays].sort((a, b) =>
            a.name.localeCompare(b.name),
        );
        const currentIndex = sortedHolidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name,
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    const cycleByYear = () => {
        const sortedHolidays = [...holidays].sort((a, b) => a.year - b.year);
        const currentIndex = sortedHolidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name,
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday.name}</div>
            <Button onClick={cycleAlphabetically}>Alphabet</Button>
            <Button onClick={cycleByYear}>Year</Button>
        </div>
    );
}