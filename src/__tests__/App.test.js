import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders timer header", () => {
	render(<App />);
	const timerText = screen.getByText(/timer/i);
	expect(timerText).toBeInTheDocument();
});

// test("renders countdown", () => {
// 	render(<App/>);
// 	const countdown
// })
