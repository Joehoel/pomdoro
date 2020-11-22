import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
	min-height: 40%;
	width: 100%;
	background: #000;
	text-transform: uppercase;
	font-size: 2rem;
	color: #fff;
	position: relative;

	display: flex;
	justify-content: center;

	box-shadow: 10px 8px 0px -2px var(--primary-color);

	.title {
		margin-top: 4rem;
	}
`;

const Header = () => {
	return (
		<HeaderStyles>
			<h1 className="title">Pomodoro</h1>
		</HeaderStyles>
	);
};

export default Header;
