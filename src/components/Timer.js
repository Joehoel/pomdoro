import React from "react";
import styled from "styled-components";
import { Box } from "./ui";

const TimerStyles = styled(Box)`
	padding: 2.5rem 3rem;
	position: absolute;
	top: 75%;
	color: #000;
	width: var(--width);
	text-align: center;
`;

const Timer = () => {
	return (
		<TimerStyles secondary>
			<h1>25:00</h1>
		</TimerStyles>
	);
};

export default Timer;
