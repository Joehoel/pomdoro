import styled from "styled-components";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Countdown from "./components/Countdown";
import TimerList from "./components/TimerList";

const Wrapper = styled.div`
	margin: 0 auto;
	width: var(--width);
	overflow: hidden;
	height: 100%;
`;

function App() {
	return (
		<>
			<Header />
			<Wrapper>
				<Countdown />
				<TimerList />
				<Controls />
			</Wrapper>
		</>
	);
}

export default App;
