import styled from "styled-components";

export const Box = styled.div`
	background-color: ${props =>
		props.primary
			? "var(--primary-color)"
			: props.secondary
			? "#fff"
			: "#000"};
	box-shadow: 8px 8px 0px -2px var(--primary-color);
`;

export const Button = styled.button`
	background-color: ${props =>
		props.primary ? "var(--primary-color)" : "#fff"};
	outline: none;
	border: none;
	padding: 0.5rem 1.75rem 1rem;
	color: #000;
	font-size: 2.3rem;
	text-transform: uppercase;
	font-weight: bold;
	box-shadow: 8px 8px 0px -2px #000;
`;
