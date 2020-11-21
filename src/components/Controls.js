import React from "react";
import styled from "styled-components";
import { Button } from "./ui";

const ControlsStyles = styled.div`
	display: flex;
	justify-content: space-between;
	width: var(--width);
	position: fixed;
	bottom: 2rem;
`;

const Controls = () => {
	return (
		<ControlsStyles>
			<Button>Stop</Button>
			<Button primary>Pause</Button>
		</ControlsStyles>
	);
};

export default Controls;
