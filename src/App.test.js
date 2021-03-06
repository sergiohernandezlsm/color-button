import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

it("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

it("initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

it("checkbox is enable/disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

it("turn button to gray", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("testing helper function", () => {
  it("should return Capital word", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
    expect(replaceCamelWithSpaces("RedRoom")).toBe("Red Room");
    expect(replaceCamelWithSpaces("RedRoomStuff")).toBe("Red Room Stuff");
  });
});
