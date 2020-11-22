import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { Box } from "./ui";

// const StartIcon = styled(FiPlay)`
// 	height: 2.2rem;
// 	width: 2.2rem;

// 	/* TODO: Improve */
// 	box-shadow: 0px -5px 0px 0px var(--primary-color) inset;
// `;

const EditIcon = styled(FiChevronRight)`
	height: 1.5rem;
	width: 1.5rem;

	/* TODO: Improve */
	box-shadow: 0px -5px 0px 0px var(--primary-color) inset;
`;

const OptionStyles = styled(Box)`
	display: flex;
	padding: 1rem;
	align-items: center;
	margin-bottom: 2rem;
	font-weight: 500;
	display: flex;
	width: 100%;
	align-items: center;

	.time {
		margin-left: auto;
		margin-right: 1rem;
		font-size: 0.8rem;
	}
`;

const Option = ({ time, name }) => {
	return (
		<OptionStyles whileTap={{ scale: 0.8 }}>
			<span className="name">{name}</span>
			<span className="time">{(time / 60).toString()} min</span>
			{/* <motion.div> */}
			<EditIcon />
			{/* </motion.div> */}
		</OptionStyles>
	);
};

export default Option;
