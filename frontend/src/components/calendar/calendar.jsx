import React, {useState} from 'react';
import Calendar from 'react-calendar';
import '../../styles/Calendar.css';
import {ChevronLeft, ChevronRight} from "lucide-react";

export default function Calendar_Overview() {
	const [value, setValue] = useState(new Date());

	return (
		<Calendar
			calendarType={"gregory"}
			value={value}
			next2Label={null}
			prev2Label={null}
			nextLabel={<ChevronRight/>}
			prevLabel={<ChevronLeft />}
		/>
	);
}
