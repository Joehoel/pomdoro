import React, { useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";

const TimerListStyles = styled.div`
	color: #fff;
	position: relative;
	margin-top: 30%;
	overflow-y: scroll;
	height: 30%;
`;

const TimerList = () => {
	const [timers, setTimers] = useState([
		{
			time: 300,
			name: "break",
		},
		{
			time: 1500,
			name: "long break",
		},
		{
			time: 3600,
			name: "lunch",
		},
		{
			time: 300,
			name: "break",
		},
	]);

	return (
		<TimerListStyles>
			{timers.map(({ time, name }) => (
				<Timer time={time} name={name} />
			))}
		</TimerListStyles>
	);
};

export default TimerList;
