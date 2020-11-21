import React from "react";
import styled from "styled-components";
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

const Countdown = () => {
	return (
		<CountdownStyles secondary>
			<h1>25:00</h1>
		</CountdownStyles>
	);
};

export default Countdown;
