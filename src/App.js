import styled from "styled-components";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Countdown from "./components/Countdown";
import OptionsList from "./components/OptionsList";
import { useState } from "react";
import { useCountdown } from "./lib/contexts/CountdownContext";
import FullscreenCountdown from "./components/FullscreenCountdown";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
	margin: 0 auto;
	width: var(--width);
	overflow: visible;
	height: 100%;
`;

function App() {
	const { time, start, pause, reset, status } = useCountdown();
	const [fullscreen, setFullscreen] = useState(false);

	const toggleFullscreen = () => {
		setFullscreen(!fullscreen);
	};

	return (
		<>
			<Header />
			<Wrapper>
				{fullscreen ? (
					<FullscreenCountdown onClick={() => toggleFullscreen()} />
				) : (
					<Countdown time={time} onClick={() => toggleFullscreen()} />
				)}
				<OptionsList />
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
