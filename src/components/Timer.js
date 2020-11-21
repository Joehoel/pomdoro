import { motion } from "framer-motion";
import React from "react";
import { FiPlay, FiEdit } from "react-icons/fi";
import styled from "styled-components";
import { Box } from "./ui";

const StartIcon = styled(FiPlay)`
	height: 2.2rem;
	width: 2.2rem;

	/* TODO: Improve */
	box-shadow: 0px -5px 0px 0px var(--primary-color) inset;
`;
const EditIcon = styled(FiEdit)`
	height: 1.5rem;
	width: 1.5rem;

	/* TODO: Improve */
	box-shadow: 0px -5px 0px 0px var(--primary-color) inset;
`;

const TimerStyles = styled(Box)`
	display: flex;
	padding: 0.5rem;
	align-items: center;
	margin-bottom: 2rem;

	.info-container {
		margin-left: 1rem;
		font-weight: 500;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;

		.info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.time {
			font-size: 0.8rem;
		}
	}
`;

const Timer = ({ time, name }) => {
	return (
		<TimerStyles>
			<motion.div whileTap={{ scale: 0.8 }}>
				<StartIcon />
			</motion.div>
			<div className="info-container">
				<div className="info">
					<span className="name">{name}</span>
					<span className="time">{(time / 60).toString()} min</span>
				</div>
				<EditIcon />
			</div>
		</TimerStyles>
	);
};

export default Timer;
