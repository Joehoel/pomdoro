import styled from "styled-components";
import { useLocalStorage } from "../lib/utils";
import Timer from "./Timer";

const TimerListStyles = styled.div`
	color: #fff;
	margin-top: 30%;
	/* overflow-y: scroll; */
	height: 30%;

	/* &::-webkit-scrollbar {
		display: none;
	} */
`;

const TimerList = () => {
	const [timers, setTimers] = useLocalStorage("timer", [
		{
			id: 1,
			time: 300,
			name: "break",
		},
		{
			id: 2,
			time: 1500,
			name: "long break",
		},
		{
			id: 3,
			time: 3600,
			name: "lunch",
		},
	]);

	return (
		<TimerListStyles>
			{timers.map(({ time, name, id }) => (
				<Timer time={time} name={name} key={id} />
			))}
		</TimerListStyles>
	);
};

export default TimerList;
