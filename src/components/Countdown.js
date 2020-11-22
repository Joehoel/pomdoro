import React from "react";
import styled from "styled-components";
import { useCountdown } from "../lib/contexts/CountdownContext";
import { Box } from "./ui";

const CountdownStyles = styled(Box)`
	padding: 2.5rem 3rem;
	position: absolute;
	bottom: 55%;
	color: #000;
	width: var(--width);
	text-align: center;
	text-transform: uppercase;
	font-size: 2rem;
`;

const Countdown = props => {
	const { time } = useCountdown();

	return (
		<CountdownStyles secondary whileTap={{ scale: 0.8 }} {...props}>
			<h1>{time}</h1>
		</CountdownStyles>
	);
};

export default Countdown;
