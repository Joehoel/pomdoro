import styled from "styled-components";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Countdown from "./components/Countdown";
import TimerList from "./components/TimerList";
import { useTimer } from "use-timer";

const Wrapper = styled.div`
	margin: 0 auto;
	width: var(--width);
	overflow: visible;
	height: 100%;
`;

function App() {
	const { time, start, pause, reset, status } = useTimer({
		initialTime: 300,
		timerType: "DECREMENTAL",
	});

	return (
		<>
			<Header />
			<Wrapper>
				<Countdown time={time} />
				<TimerList />
				<Controls
					start={start}
					pause={pause}
					reset={reset}
					status={status}
				/>
			</Wrapper>
		</>
	);
}

export default App;
