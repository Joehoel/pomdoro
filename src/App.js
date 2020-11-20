import styled from "styled-components";
import Header from "./components/Header";
import { Box } from "./components/ui";
import { FiPlay } from "react-icons/fi";
import Controls from "./components/Controls";

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background: #ededed;
`;

const TimerList = styled.div`
	color: #fff;
	position: relative;
	margin: 30% auto 0 auto;
	width: var(--width);

	& > * {
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
	}
`;

const StartIcon = styled(FiPlay)`
	height: 2rem;
	width: 2rem;

	/* TODO: Improve */
	box-shadow: 0px -5px 0px 0px var(--primary-color) inset;
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
			<Controls />
		</Wrapper>
	);
}

export default App;
