import React from "react";
import { useCountdown } from "../lib/contexts/CountdownContext";
import { Fullscreen } from "./ui";

const FullscreenCountdown = props => {
	const { time } = useCountdown();

	return (
		<Fullscreen {...props} initial={{ scale: 0 }} animate={{ scale: 1 }}>
			{time}
		</Fullscreen>
	);
};

export default FullscreenCountdown;
