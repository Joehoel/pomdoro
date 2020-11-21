import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled.div`
	overflow: visible;
	background-color: ${props =>
		props.primary
			? "var(--primary-color)"
			: props.secondary
			? "#fff"
			: "#000"};
	box-shadow: 8px 8px 0px -2px var(--primary-color);
`;

export const Button = styled(motion.button)`
	background-color: ${props =>
		props.primary ? "var(--primary-color)" : "#fff"};
	outline: none;
	border: none;
	padding: 0.5rem 1rem 0.75rem;
	color: #000;
	font-size: 2.3rem;
	text-transform: uppercase;
	font-weight: bold;
	box-shadow: 8px 8px 0px -2px #000;

	&:disabled {
		background-color: #c9c9c9;
		color: #9f9f9f;
	}
	/* &:active {
		transform: scale(0.9);
		transition: transform 0.2s ease;
	} */
`;
