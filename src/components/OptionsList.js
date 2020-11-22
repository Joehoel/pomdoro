import { FiSettings } from "react-icons/fi";
import styled from "styled-components";
import { useLocalStorage } from "../lib/utils";
import Option from "./Option";
import { Box } from "./ui";

const OptionsListStyles = styled.div`
	color: #fff;
	margin-top: 22%;
	/* overflow-y: scroll; */
	height: 30%;

	/* &::-webkit-scrollbar {
		display: none;
	} */
	.more {
		/* padding: 0.5rem; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const OptionsList = () => {
	const [options] = useLocalStorage("options", [
		{
			id: 1,
			time: 1500,
			name: "pomodoro",
		},
		{
			id: 2,
			time: 900,
			name: "long break",
		},
		{
			id: 3,
			time: 300,
			name: "short break",
		},
	]);

	return (
		<OptionsListStyles>
			{options.map(({ time, name, id }) => (
				<Option time={time} name={name} key={id} />
			))}
			<Box className="more" secondary whileTap={{ scale: 0.8 }}>
				Settings
				<FiSettings />
			</Box>
		</OptionsListStyles>
	);
};

export default OptionsList;
