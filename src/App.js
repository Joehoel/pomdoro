import styled from "styled-components";
import Header from "./components/Header";
import { Box, Button } from "./components/ui";
import { FiPlay } from "react-icons/fi";

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background: #ededed;

	.controls {
		width: 100%;
		height: auto;
		position: fixed;
		bottom: 2rem;

		display: flex;
		justify-content: space-around;
	}
`;

const TimerList = styled.div`
	color: #fff;
	width: 100%;
	position: relative;
	margin: 30% auto 0 auto;
	width: var(--width);

	& > * {
		display: flex;
		padding: 0.75rem;
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
	}
`;

const StartIcon = styled(FiPlay)`
	height: 2rem;
	width: 2rem;
`;

function App() {
	return (
		<Wrapper>
			<Header />
			<TimerList>
				<Box>
					<StartIcon />
					<div className="info">
						<span className="name">break</span>
						<span className="time">5 min</span>
					</div>
				</Box>
				<Box>
					<StartIcon />
					<div className="info">
						<span className="name">break</span>
						<span className="time">5 min</span>
					</div>
				</Box>
				<Box>
					<StartIcon />
					<div className="info">
						<span className="name">break</span>
						<span className="time">5 min</span>
					</div>
				</Box>
			</TimerList>
			<div className="controls">
				<Button>Stop</Button>
				<Button primary>Pause</Button>
			</div>
		</Wrapper>
	);
}

export default App;
