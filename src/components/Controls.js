import React from "react";
import styled from "styled-components";
import { Button } from "./ui";

const ControlsStyles = styled.div`
	margin: 0 auto;
	width: var(--width);

	display: flex;
	justify-content: space-between;
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
