import { useTimer } from "use-timer";

import { createContext, useContext } from "react";

const CountdownContext = createContext();

export const CountdownProvider = ({ children }) => {
	const { time, pause, reset, start, status } = useTimer({
		initialTime: 1500,
		timerType: "DECREMENTAL",
	});

	const minutes = Math.floor(time / 60);
	const remainderSeconds = time % 60;

	const timeLeft = `${minutes}:${
		remainderSeconds > 9 ? remainderSeconds : `0${remainderSeconds}`
	}`;

	return (
		<CountdownContext.Provider
			value={{ time: timeLeft, pause, reset, start, status }}
		>
			{children}
		</CountdownContext.Provider>
	);
};

export const useCountdown = () => {
	return useContext(CountdownContext);
};
