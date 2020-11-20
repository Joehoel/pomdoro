import styled from "styled-components";
import Header from "./components/Header";
import { Box, Button } from "./components/ui";

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

function App() {
	return (
		<Wrapper>
			<Header />
			<div className="timer-list"></div>
			<div className="controls">
				<Button>Stop</Button>
				<Button primary>Pause</Button>
			</div>
		</Wrapper>
	);
}

export default App;
