import React from "react";
import styled from "styled-components";
import { useCountdown } from "../lib/contexts/CountdownContext";
import { Button } from "./ui";

const ControlsStyles = styled.div`
	display: flex;
	justify-content: space-between;
	width: var(--width);
	position: fixed;
	bottom: 2rem;
`;

const Controls = () => {
	const { start, reset, pause, status } = useCountdown();

	const running = status === "RUNNING";
	const stopped = status === "STOPPED";

	return (
		<ControlsStyles>
			{stopped ? (
				<>
					<Button
						// whileTap={{ scale: 0.8 }}
						// onClick={() => reset()}
						disabled
					>
						Reset
					</Button>
					<Button
						whileTap={{ scale: 0.8 }}
						onClick={() => start()}
						primary
					>
						Start
					</Button>
				</>
			) : (
				<>
					<Button whileTap={{ scale: 0.8 }} onClick={() => reset()}>
						Reset
					</Button>
					<Button
						whileTap={{ scale: 0.8 }}
						primary
						onClick={running ? () => pause() : () => start()}
					>
						{running ? "Pause" : "Resume"}
					</Button>
				</>
			)}
		</ControlsStyles>
	);
};

export default Controls;
