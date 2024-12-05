import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../styles/Calendar.css';

export default function Calendar_Overview() {
	const [value, setValue] = useState(new Date());

	function onChange(nextValue) {
		setValue(nextValue);
	}

	return (
		<div className="flex justify-center items-center bg-white bg-opacity-30 rounded-[40px] w-[350px] h-[310px] shadow-lg">
			<Calendar
				onChange={onChange}
				value={value}
			/>
		</div>
	);
}
