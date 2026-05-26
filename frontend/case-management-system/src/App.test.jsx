import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


import App from "./App";

test("renders task management title", () => {

  render(<App />);

  const heading = screen.getByText(
    /Task Management System/i
  );

  expect(heading).toBeInTheDocument();

});