import React from "react";
import { FiPlay } from "react-icons/fi";
import styled from "styled-components";
import { Box } from "./ui";

const StartIcon = styled(FiPlay)`
	height: 2rem;
	width: 2rem;

	/* TODO: Improve */
	box-shadow: 0px -5px 0px 0px var(--primary-color) inset;
`;

const TimerStyles = styled(Box)`
	display: flex;
	padding: 0.5rem;
	align-items: center;
	margin-bottom: 2rem;

	.info {
		margin-left: 0.5rem;
		font-weight: 500;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.time {
			font-size: 0.8rem;
		}
	}
`;

const Timer = ({ time, name }) => {
	return (
		<TimerStyles>
			<StartIcon />
			<div className="info">
				<span className="name">{name}</span>
				<span className="time">{(time / 60).toString()} min</span>
			</div>
		</TimerStyles>
	);
};

export default Timer;
